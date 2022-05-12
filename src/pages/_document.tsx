import Document, { Head, Main, Html, NextScript} from 'next/document';

class MyDocument extends Document {
    render(){
        return(

              <Html>
              <Head>

                  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                  <link rel="icon" href="/favicon.ico" />
                  <title>Document</title>
              </Head>
              <body>
                  <Main />
                  <NextScript/>
                  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossOrigin="anonymous"></script>

              </body>
              </Html>

        )

    }

}

export default MyDocument;
