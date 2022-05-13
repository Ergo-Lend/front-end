import Head from 'next/head'
import MainLayout from 'components/main-layout'
import LoanList from 'components/loan-list.js'
import axios from 'axios'
import MarketingHeader from '~/components/marketing-header'
import MarketingBlurb from '~/components/marketing-blurb'
import SectionHeader from '~/components/section-header'
import FeatureGrid from '~/components/feature-grid'
import Tokenomics from '~/components/tokenomics'
import Timeline from '~/components/timeline'
import MeetTheTeam from '~/components/meet-the-team'
import GlobalTeam from '~/components/global-team'

const pageTitle = 'Ergo Lend - Home'
const pageDescription =
  'A person-to-person (P2P) lending platform with easy to use tools to borrow and lend money on the Ergo blockchain.'
const ogImage = 'content="https://ergolend.org/images/og-image.jpg"'

//TODO: Move these to a service
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

export default function PageHome() {
  return (
    <div className="">
      <Head>
        <title>{pageTitle}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content={pageTitle} key="title" />
        <meta property="og:image" content={ogImage} />
        <meta name="description" content={pageDescription} />
      </Head>

      <MainLayout>
        <MarketingHeader />
        <MarketingBlurb />
        <SectionHeader
          className="mt-36"
          primaryText="PEER TO PEER"
          heading="Lending Platform"
          paragraph="Ergo-Lend is a new paradigm for lending. The goal is to leverage blockchain technology to create a global lending platform. A decentralized autonomous organization (DAO) will manage the platform."
        />
        <FeatureGrid />
        <Tokenomics />
        <SectionHeader
          className="mt-36"
          primaryText="ROADMAP"
          heading="The Timeline"
          paragraph="Ergo-Lend started for the ErgoHack 2 hackathon and we just kept going!  We hope to help overcome some issues for the billions of unbanked people around the world.  This is some of what we have in various stages of implementation."
        />
        <Timeline />
      </MainLayout>
    </div>
  )
}
