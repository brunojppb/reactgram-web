import { StaticLayout } from './StaticLayout';

function HelpPage() {

  return(
    <StaticLayout>
      <h1>Help Page</h1>
      <p>
        Reactgram is an app created while reading the <a href="https://reactgram.dev">reactgram book</a>
        {' '}which doesn't provide any support. But feel free to ask questions via
        our <a href="https://github.com/brunojppb/reactgram/issues">Github Issues page.</a>
      </p>
    </StaticLayout>
  )

}

export default HelpPage;