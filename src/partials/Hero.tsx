import {
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
} from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Hi there, I'm <GradientText>Mohammad</GradientText> 👋
        </>
      }
      description={
        <>
          <p className='font-bold text-lg text-justify'>I am a software specialist with over 2 years of experience in the software
industry. I have worked in various fields including team leading, frontend and back-end development, and management and maintenance of
codebases. I am looking for new opportunities for professional growth
and to help teams develop high-quality software</p>
        </>
      }
      avatar={
        <img
          className="h-80 w-64"
          src="/assets/images/avatar.svg"
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          <a href="https://twitter.com/code_mohammad">
            <HeroSocial
              src="/assets/images/twitter-icon.png"
              alt="Twitter mohammad hasani"
            />
          </a>
          <a href="https://github.com/mohammadhasanii">
            <HeroSocial
              src="/assets/images/icons8-github-48.png"
              alt="Github mohammad hasani"
            />
          </a>
          <a href="https://medium.com/@Mohammadhasani">
            <HeroSocial
              src="/assets/images/icons8-medium-48.png"
              alt="Medium mohammad hasani"
            />
          </a>
          <a href="https://wakatime.com/@Mohammadhasani">
            <HeroSocial
              src="/assets/images/wakatime-white.svg"
              alt="Wakatime mohammad hasani"
            />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
