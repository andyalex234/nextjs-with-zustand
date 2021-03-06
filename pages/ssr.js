import Page from "../components/page";
import { initializeStore } from "../lib/store";

export default function SSR(props) {
  console.log(props);
  return <Page />;
}

// The date returned here will be different for every request that hits the page,
// that is because the page becomes a serverless function instead of being statically
// exported when you use `getServerSideProps` or `getInitialProps`
export function getServerSideProps() {
  const zustandStore = initializeStore();

  zustandStore.getState().tick(Date.now(), false);

  return {
    props: { initialZustandState: JSON.stringify(zustandStore.getState()) }
  };
}
