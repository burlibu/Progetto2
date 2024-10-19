'use client';
import React from 'react';
import './tatoo.css';

const TattooIdeaGenerator: React.FC = () => {
  const adjectives = ["surreal", "bloody", "romantic", "wavy", "melting", "flower", "creeping", "menacing", "smiling", "sleepy", "dancing", "thorny", "dreamy", "flying", "sleeping", "skeletal", "phantom", "myserious", "burning"];
  const conjunctions = ["in front of a", "pierced by a", "over a", "wrapped around a", "under a", "and a", "with a", "looking at a", "inside of a", "holding a"];
  const nouns = ["skull", "dagger", "snake", "cobra", "moon", "sun", "palm", "cobweb", "set of stairs", "window", "candlestick", "hand", "veil", "eye", "mermaid", "bottle", "sword", "castle", "princess", "prince", "wizard", "star", "apple", "cherry", "torso", "curtain", "tiger", "dog", "bird", "rose", "clock", "tower", "spider", "chain", "ruin", "nunchaku"];

  const [generatedText, setGeneratedText] = React.useState("generate tattoo ideas");

  const generateIdea = () => {
    const adjective1 = adjectives[Math.floor(Math.random() * adjectives.length)];
    const adjective2 = adjectives[Math.floor(Math.random() * adjectives.length)];
    const conjunction1 = conjunctions[Math.floor(Math.random() * conjunctions.length)];
    const noun1 = nouns[Math.floor(Math.random() * nouns.length)];
    const noun2 = nouns[Math.floor(Math.random() * nouns.length)];

    const idea = `a <span onclick="generateDiff(0)">${adjective1}</span> <span onclick="generateDiff(1)">${noun1}</span> <span onclick="generateDiff(2)">${conjunction1}</span> <span onclick="generateDiff(3)">${adjective2}</span> <span onclick="generateDiff(4)">${noun2}</span>`;
    setGeneratedText(idea);
  };

  const generateShortIdea = () => {
    const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const noun = nouns[Math.floor(Math.random() * nouns.length)];

    const shortIdea = `a <span onclick="generateDiff(0)">${adjective}</span> <span onclick="generateDiff(1)">${noun}</span>`;
    setGeneratedText(shortIdea);
  };

  return (
    <div id="wrapBox">
      <div id="toBeCentered">
        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
          viewBox="0 0 103 51"  xmlSpace="preserve">
          <path d="M23.9,24.4c1.9,0.2,2.4,8.1,3.4,10.1s7.1,7.1,8.3,8.1c0,0,0.1-2.4-0.9-4.1s-3-7.8-3.9-9s-3.6-4-2.5-4.4s4.8-0.3,5.6,0.8
            s3.6,6.3,6.5,9.8s10.8,4.7,12.8,5.9s3.8,0.4,3.8,0.4s-0.6-1.1-3.8-2.4s-6.8-3.6-8.6-5.9s-5.3-6.2-6.1-7.1c0,0,4.4-0.1,6.1,0
            s3.7,0.4,3.7,0.4s3.9,6.1,6.3,7.1s5.9,3.3,7.7,4.4s5.3,1.4,5.3,1.4s-2.4-2.5-3.3-3.6s-3.8-4.4-6.9-6.2S50.6,26,50.6,26l10.3-0.1
            c0,0,3.8,5.2,5.6,6.1s6.9,2.3,8.1,3.3s5.4,0.7,5.4,0.7s-2.4-1.8-4.1-3.6s-8.8-6.9-11.4-7.6c0,0,0.1-1.3,4.4-1.6s9.9-3,11.7-4.3
            s5.1-3.4,6.2-3.6s4.3-0.6,4.3-0.6s-3.5-1.8-6.4-1s-4.8,2.4-7.9,2.9s-8.6,1.6-10.4,2.9s-3.2,3.8-4.6,3.8s-5.4,0.8-7.1,0.9
            c0,0,6.7-5.4,8.2-7.2s7.2-3.4,7.6-5.9c0,0-0.7,0-4.4,0.9s-5.8,2.6-7.5,4.4s-4.6,5.7-6.1,6.3s-2.1,1.8-2.1,1.8s-8.8,0.3-9.8,0.1
            c0,0,6.1-4.5,7.8-6.3s7.5-8,7.5-8s-3.2,0.1-5.3,1.9s-3.9,2.9-6.8,4s-3.4,4.1-4.1,5.1s-0.8,1.8-1.4,2.6c0,0-8.5,0.1-10.2-0.1
            c0,0-0.3-0.5,1.5-2s11.1-7.1,11.8-11.4c0,0-1.9-0.5-2.9,0.5s-4.3,4.6-5.8,4.9s-6.3,4.6-7.1,5.8s-3.4,1.5-5.5,1s-7.3-3.7-8.5-3.4
            s-0.4,2.3,0.9,2.5s4.8,2.1,6.5,2.6S22.4,24.2,23.9,24.4z" />
        </svg>

        <p id="generatedText" dangerouslySetInnerHTML={{ __html: generatedText }}></p>
        <button className="font-family: 'EB Garamond', serif;" onClick={generateIdea}>generate idea</button>
        <button onClick={generateShortIdea}>just a quick epithet</button>
        <p className="instructions">Tip: you can change particular words by clicking them.</p>
      </div>
    </div>
  );
};

export default TattooIdeaGenerator;