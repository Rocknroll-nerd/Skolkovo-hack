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
        <table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>CandidateId</th>
      <th>Score</th>
      <th>Position</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>123</td>
      <td>0.207918</td>
      <td>Водитель-экспедитор</td>
    </tr>
    <tr>
      <th>1</th>
      <td>124</td>
      <td>0.221258</td>
      <td>Водитель (семейный)</td>
    </tr>
    <tr>
      <th>2</th>
      <td>125</td>
      <td>0.432522</td>
      <td>Водитель (автобуса)</td>
    </tr>
    <tr>
      <th>3</th>
      <td>126</td>
      <td>0.662214</td>
      <td>Коориднатор, специалист по подбору персонала</td>
    </tr>
    <tr>
      <th>4</th>
      <td>127</td>
      <td>0.708675</td>
      <td>Водитель</td>
    </tr>
    <tr>
      <th>5</th>
      <td>128</td>
      <td>0.038705</td>
      <td>Водитель офисный</td>
    </tr>
    <tr>
      <th>6</th>
      <td>129</td>
      <td>0.877848</td>
      <td>Водитель категории В, С, Д, Е, ДОПОГ</td>
    </tr>
    <tr>
      <th>7</th>
      <td>130</td>
      <td>0.986839</td>
      <td>Персональный водитель руководителя</td>
    </tr>
    <tr>
      <th>8</th>
      <td>131</td>
      <td>0.087046</td>
      <td>Водитель автомобиля категории В, С, Е</td>
    </tr>
    <tr>
      <th>9</th>
      <td>132</td>
      <td>0.628874</td>
      <td>Водитель / Водитель-экспедитор</td>
    </tr>
  </tbody>
</table>
        </p>
      </main>

      <Footer />
    </div>
  )
}
