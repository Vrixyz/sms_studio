use std::{
    fs::File,
    io::{BufReader, Read},
};

use pest::*;
use pest_derive::Parser;

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

fn main() {
    let args = <args::Args as clap::Parser>::parse();

    let mut file = File::open(args.file_path).unwrap();

    let mut contents = String::new();
    file.read_to_string(&mut contents).unwrap();
    let parsed_input = StoryParser::parse(Rule::story, &contents).unwrap();
    dbg!(parsed_input);
}
