import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Рейтинг Вакансии</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Введите вакансию" />
        <p className="description">
        <table className="table">
          <thead> 
          <tr style="text-align: right;">
          <th></th>
            <th>CandidateId</th>
            <th>Score</th>
            <th>Position</th>
          </tr>
          </thead>
        </table>
        </p>
      </main>

      <Footer />
    </div>
  )
}
