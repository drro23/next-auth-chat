import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";
// import { ToastContainer, Zoom } from "react-toastify";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html lang="en" className="w-full h-full">
        <Head />
        <body className="transition-colors ease-in-out duration-300 dark:bg-darkBlack bg-gray-100 font-sans">
          {/* <ToastContainer transition={Zoom}/> */}
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
