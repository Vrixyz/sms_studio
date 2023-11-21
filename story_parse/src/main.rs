use std::{
    fs::File,
    io::{BufReader, Read},
};

use pest::*;
use pest_derive::Parser;
use serde::Deserialize;
use serde::Serialize;

#[derive(Parser)]
#[grammar = "assets/story.pest"] // relative to src
struct StoryParser;

mod args {
    use clap_derive::Parser;

    /// Simple program to greet a person
    #[derive(Parser, Debug)]
    #[command(author, version, about, long_about = None)]
    pub struct Args {
        /// Name of the person to greet
        #[arg(short, long, required = true)]
        pub file_path: String,
    }
}

#[derive(Default, Debug, Clone, PartialEq, Serialize, Deserialize)]
pub struct Entry {
    pub text: String,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub from_me: Option<bool>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub time: Option<i64>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub delay: Option<i64>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub typing_duration: Option<i64>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub is_neutral: Option<bool>,
}

fn main() {
    let args = <args::Args as clap::Parser>::parse();

    let mut file = File::open(args.file_path).unwrap();

    let mut contents = String::new();
    file.read_to_string(&mut contents).unwrap();
    let mut parsed_input = StoryParser::parse(Rule::story, &contents).unwrap();

    let mut entries = vec![];
    for t in parsed_input {
        let inner = t.into_inner();
        for entry in inner {
            let mut reader = entry.into_inner();

            let Some(entry) = read_entry(reader) else {
                continue;
            };
            entries.push(entry);
        }
    }
    let serialized = serde_json::to_string_pretty(&entries).unwrap();
    println!("serialized = {}", serialized);
}

fn read_entry(mut reader: iterators::Pairs<'_, Rule>) -> Option<Entry> {
    let sender = reader.next()?.as_span().as_str();
    let message = reader.next()?.as_span().as_str();
    Some(Entry {
        from_me: Some(sender == "A"),
        text: message.to_string(),
        ..Default::default()
    })
}
