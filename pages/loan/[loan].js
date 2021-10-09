import Head from 'next/head'
import MainLayout from 'components/main-layout'
import Loan from 'components/loan'
import mockLoans from 'mocks/loan'
import _ from 'lodash'

export default function PageLoan({ loan }) {
  return (
    <div className="">
      <Head>
        <title>Ergo Lend</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>{loan && <Loan loanData={loan} />}</MainLayout>
    </div>
  )
}

export const getServerSideProps = async ({ query, params }) => {
  const loan = _.find(mockLoans, { id: parseInt(params.loan) })
  if (!loan) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  return {
    props: {
      loan
    }
  }
}
