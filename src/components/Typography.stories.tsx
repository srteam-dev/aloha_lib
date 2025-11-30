import type { Meta, StoryObj } from '@storybook/react';
import { H1, H2, H3, H4, P, Subtitle, Lead, Small, Muted } from './Typography';

const meta = {
  title: 'Components/Typography',
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta;

export default meta;

export const Headings: StoryObj = {
  render: () => (
    <div className="space-y-6">
      <H1>Heading 1 - The quick brown fox jumps</H1>
      <H2>Heading 2 - The quick brown fox jumps</H2>
      <H3>Heading 3 - The quick brown fox jumps</H3>
      <H4>Heading 4 - The quick brown fox jumps</H4>
    </div>
  ),
};

export const Paragraphs: StoryObj = {
  render: () => (
    <div className="space-y-4 max-w-2xl">
      <P>
        This is a regular paragraph. The quick brown fox jumps over the lazy dog. 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </P>
      <P>
        This is another paragraph with some more text. It demonstrates how paragraphs 
        look when they follow each other with proper spacing.
      </P>
    </div>
  ),
};

export const SubtitleExample: StoryObj = {
  render: () => (
    <div className="space-y-4">
      <H2>Main Title</H2>
      <Subtitle>This is a subtitle that provides additional context</Subtitle>
    </div>
  ),
};

export const LeadExample: StoryObj = {
  render: () => (
    <div className="space-y-4 max-w-2xl">
      <H2>Article Title</H2>
      <Lead>
        This is a lead paragraph that introduces the content. It's slightly larger 
        and muted to draw attention without overwhelming the reader.
      </Lead>
      <P>
        This is the main content that follows the lead paragraph. The lead helps 
        to set the context for what comes next.
      </P>
    </div>
  ),
};

export const SmallText: StoryObj = {
  render: () => (
    <div className="space-y-2">
      <P>This is regular text</P>
      <Small>This is small text, useful for captions or footnotes</Small>
    </div>
  ),
};

export const MutedText: StoryObj = {
  render: () => (
    <div className="space-y-4">
      <P>This is regular text with normal color</P>
      <Muted>This is muted text, useful for secondary information</Muted>
    </div>
  ),
};

export const FullExample: StoryObj = {
  render: () => (
    <div className="max-w-3xl space-y-6">
      <H1>Welcome to Our Platform</H1>
      <Subtitle>Build amazing applications with our component library</Subtitle>
      
      <Lead>
        Our library provides a comprehensive set of components designed to help you 
        create beautiful and functional user interfaces quickly and efficiently.
      </Lead>
      
      <H2>Getting Started</H2>
      <P>
        To begin using our components, simply install the package and import what you need. 
        Each component is fully typed and comes with extensive documentation.
      </P>
      
      <H3>Installation</H3>
      <P>
        Run the following command in your project directory to install the library.
        You'll have access to all components immediately after installation.
      </P>
      
      <H4>Quick Example</H4>
      <Muted>Here's a simple example to get you started</Muted>
      
      <Small>Last updated: November 30, 2025</Small>
    </div>
  ),
};
