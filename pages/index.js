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
          Тут что-то будет
        </p>
      </main>

      <Footer />
    </div>
  )
}
