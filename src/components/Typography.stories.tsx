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
        This is a lead paragraph that introduces the content. It&apos;s slightly larger 
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
      <P>Run the following command in your terminal:</P>
      <Small>npm install @srteam-dev/aloha-ui</Small>
      
      <H4>Important Notes</H4>
      <Muted>
        Make sure you have React 18 or higher installed in your project before using this library.
      </Muted>
    </div>
  ),
};

// Font Examples
export const JetBrainsMonoFont: StoryObj = {
  render: () => (
    <div className="space-y-6">
      <H1 font="jetbrains">JetBrains Mono Heading 1</H1>
      <H2 font="jetbrains">JetBrains Mono Heading 2</H2>
      <H3 font="jetbrains">JetBrains Mono Heading 3</H3>
      <P font="jetbrains">
        This paragraph uses JetBrains Mono font. The quick brown fox jumps over the lazy dog.
        123456789 - Perfect for code and technical content.
      </P>
    </div>
  ),
};

export const NunitoSansFont: StoryObj = {
  render: () => (
    <div className="space-y-6">
      <H1 font="nunito">Nunito Sans Heading 1</H1>
      <H2 font="nunito">Nunito Sans Heading 2</H2>
      <H3 font="nunito">Nunito Sans Heading 3</H3>
      <P font="nunito">
        This paragraph uses Nunito Sans font. The quick brown fox jumps over the lazy dog.
        Perfect for readable and friendly content.
      </P>
    </div>
  ),
};

export const FontWeights: StoryObj = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-bold mb-4">JetBrains Mono Weights</h3>
        <div className="space-y-2">
          <P font="jetbrains" weight="light">Light (300) - The quick brown fox</P>
          <P font="jetbrains" weight="medium">Medium (500) - The quick brown fox</P>
          <P font="jetbrains" weight="bold">Bold (700) - The quick brown fox</P>
        </div>
      </div>
      
      <div>
        <h3 className="text-lg font-bold mb-4">Nunito Sans Weights</h3>
        <div className="space-y-2">
          <P font="nunito" weight="light">Light (300) - The quick brown fox</P>
          <P font="nunito" weight="medium">Medium (500) - The quick brown fox</P>
          <P font="nunito" weight="bold">Bold (700) - The quick brown fox</P>
          <P font="nunito" weight="black">Black (900) - The quick brown fox</P>
        </div>
      </div>
    </div>
  ),
};

export const FontComparison: StoryObj = {
  render: () => (
    <div className="space-y-12">
      <div>
        <h3 className="text-lg font-bold mb-6">Default System Font</h3>
        <H1>Heading 1 - System Font</H1>
        <H2>Heading 2 - System Font</H2>
        <P>Paragraph with default system font. The quick brown fox jumps over the lazy dog.</P>
      </div>

      <div>
        <h3 className="text-lg font-bold mb-6">JetBrains Mono</h3>
        <H1 font="jetbrains">Heading 1 - JetBrains Mono</H1>
        <H2 font="jetbrains">Heading 2 - JetBrains Mono</H2>
        <P font="jetbrains">Paragraph with JetBrains Mono. The quick brown fox jumps over the lazy dog. 0123456789</P>
      </div>

      <div>
        <h3 className="text-lg font-bold mb-6">Nunito Sans</h3>
        <H1 font="nunito">Heading 1 - Nunito Sans</H1>
        <H2 font="nunito">Heading 2 - Nunito Sans</H2>
        <P font="nunito">Paragraph with Nunito Sans. The quick brown fox jumps over the lazy dog.</P>
      </div>
    </div>
  ),
};

export const MixedFonts: StoryObj = {
  render: () => (
    <div className="max-w-3xl space-y-6">
      <H1 font="nunito" weight="bold">Modern Design System</H1>
      <Subtitle font="nunito" weight="light">
        Combining elegance with functionality
      </Subtitle>
      
      <P font="nunito">
        This content uses Nunito Sans for a friendly, approachable feel. 
        It&apos;s perfect for marketing and user-facing content.
      </P>
      
      <H2 font="jetbrains" weight="medium">Technical Specifications</H2>
      <P font="jetbrains" weight="light">
        This section uses JetBrains Mono for a technical, code-like appearance.
        Version: 1.0.0 | Build: 2024.12.20
      </P>
      
      <div className="bg-gray-100 p-4 rounded">
        <Small font="jetbrains" weight="medium">
          Code snippet: import {`{ H1, P }`} from &apos;@srteam-dev/aloha-ui&apos;;
        </Small>
      </div>
    </div>
  ),
};

// Color Examples
export const ColorPalette: StoryObj = {
  render: () => (
    <div className="space-y-6">
      <H1 color="lima">Lima Color Heading</H1>
      <H2 color="bosque">Bosque Color Heading</H2>
      <H3 color="coral">Coral Color Heading</H3>
      <P color="olivo">This paragraph uses the olivo color from the palette.</P>
      <P color="lavanda">This paragraph uses the lavanda color.</P>
      <P color="electrico">This paragraph uses the electrico color.</P>
      <Small color="girasol">Small text with girasol color</Small>
    </div>
  ),
};

export const ThemeColors: StoryObj = {
  render: () => (
    <div className="space-y-6">
      <H1 color="theme-primary">Primary Theme Color (adapts to light/dark)</H1>
      <H2 color="theme-highlight">Highlight Theme Color</H2>
      <P color="theme-text">This text uses the theme text color that changes with the theme.</P>
      <Muted color="theme-primary">Muted text with primary theme color</Muted>
    </div>
  ),
};

export const ColorShowcase: StoryObj = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-bold mb-4">Palette Colors</h3>
        <div className="space-y-2">
          <H3 color="olivo">Olivo (#383517)</H3>
          <H3 color="lima">Lima (#B4DE6E)</H3>
          <H3 color="bosque">Bosque (#648C2C)</H3>
          <H3 color="hueso">Hueso (#F5F5DC)</H3>
          <H3 color="piedra">Piedra (#4A443F)</H3>
          <H3 color="corteza">Corteza (#6B5B3E)</H3>
          <H3 color="girasol">Girasol (#FFD400)</H3>
          <H3 color="coral">Coral (#FF6F61)</H3>
          <H3 color="aqua">Aqua (#66FFCC)</H3>
          <H3 color="lavanda">Lavanda (#B388D3)</H3>
          <H3 color="electrico">Eléctrico (#0084FF)</H3>
        </div>
      </div>
      
      <div>
        <h3 className="text-lg font-bold mb-4">Theme Colors (adapt to light/dark mode)</h3>
        <div className="space-y-2">
          <P color="theme-background">Theme Background Color</P>
          <P color="theme-text">Theme Text Color</P>
          <P color="theme-highlight">Theme Highlight Color</P>
          <P color="theme-primary">Theme Primary Color</P>
        </div>
      </div>
    </div>
  ),
};

export const CombinedExample: StoryObj = {
  render: () => (
    <div className="max-w-3xl space-y-6">
      <H1 font="nunito" weight="bold" color="bosque">
        Welcome to Aloha UI
      </H1>
      <Subtitle font="nunito" weight="light" color="corteza">
        Build beautiful applications with our design system
      </Subtitle>
      
      <P font="nunito" color="theme-text">
        Combine fonts, weights, and colors to create unique typography styles. 
        This example shows how all props work together seamlessly.
      </P>
      
      <H2 font="jetbrains" weight="medium" color="electrico">
        Technical Features
      </H2>
      
      <div className="grid grid-cols-2 gap-4">
        <div>
          <H4 color="coral">Fast</H4>
          <Small color="theme-text">Lightning-fast performance</Small>
        </div>
        <div>
          <H4 color="aqua">Flexible</H4>
          <Small color="theme-text">Highly customizable</Small>
        </div>
      </div>
      
      <P font="jetbrains" weight="light" color="lavanda">
        const aloha = new DesignSystem();
      </P>
    </div>
  ),
};
