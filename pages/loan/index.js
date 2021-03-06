import Head from 'next/head'
import MainLayout from 'components/main-layout'
import LoanList from 'components/loan-list.js'
import axios from 'axios'

const fetchData = async (api) =>
  await axios
    .get(api)
    .then((res) => ({
      error: false,
      loans: res.data.items
    }))
    .catch(() => ({
      error: true,
      loans: null
    }))

const fetchLoans = async () => {
  const loanApi = 'https://ergo-lend.herokuapp.com/api/lend'
  return fetchData(loanApi)
}

const fetchRepayments = async () => {
  const repaymentApi = 'https://ergo-lend.herokuapp.com/api/repayment'
  return fetchData(repaymentApi)
}

export default function PageHome({ loans }) {
  return (
    <div className="">
      <Head>
        <title>Ergo Lend</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainLayout>
        <LoanList title="loan" loanData={loans} />
      </MainLayout>
    </div>
  )
}

export const getServerSideProps = async ({ req, res }) => {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=60, stale-while-revalidate=240'
  )

  const loans = await fetchLoans()
  // const repayments = await fetchRepayments()

  return {
    props: {
      loans
      // repayments
    }
  }
}
