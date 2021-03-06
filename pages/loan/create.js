import Head from 'next/head'
import MainLayout from 'components/main-layout'
import LoanCreateForm from 'components/loan-create'

export default function PageLoan() {
  return (
    <div className="">
      <Head>
        <title>Ergo Lend</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout showCreate={false}>
        <LoanCreateForm />
      </MainLayout>
    </div>
  )
}
