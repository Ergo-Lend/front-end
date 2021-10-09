import Head from 'next/head'
import MainLayout from 'components/main-layout'
import LoanList from 'components/loan-list.js'
import mockLoans from 'mocks/loan'

export default function PageHome({ loans }) {
  return (
    <div className="">
      <Head>
        <title>Ergo Lend</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainLayout>
        <LoanList loanData={loans} />
      </MainLayout>
    </div>
  )
}

export const getServerSideProps = async () => {
  const loans = mockLoans
  return {
    props: {
      loans
    }
  }
}
