import {
  Logo,
  NavbarTwoColumns,
  NavMenu,
  NavMenuItem,
  Section,
} from 'astro-boilerplate-components';

const Navbar = () => (
  <Section>
    <NavbarTwoColumns>
      <a href="/">
        <Logo
          icon={
            <img className='w-10 mr-3' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/NestJS.svg/621px-NestJS.svg.png?20221211225055'/>

          }
          name="Mohammad Hasani"
        />
      </a>

      <NavMenu>
        <NavMenuItem href="https://medium.com/@Mohammadhasani">Medium</NavMenuItem>
        <NavMenuItem href="https://github.com/mohammadhasanii">GitHub</NavMenuItem>
        <NavMenuItem href="https://twitter.com/code_mohammad">Twitter</NavMenuItem>
      </NavMenu>
    </NavbarTwoColumns>
  </Section>
);

export { Navbar };
