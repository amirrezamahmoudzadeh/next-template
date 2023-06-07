import Document, { Head, Html, Main, NextScript } from "next/document"

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps, locale: ctx?.locale || "en" }
  }
  render() {
    const { locale } = this.props.__NEXT_DATA__
    const dir = locale === "en" ? "ltr" : "rtl"
    return (
      <Html
        dir={this.props.locale === "en" ? "ltr" : "rtl"}
        lang={this.props.locale}
      >
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
export default MyDocument
