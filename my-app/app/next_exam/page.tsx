import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="grid grid-cols-3 place-self-center w-[80vw] m-[2em]">
              <Image src="/warodom.jpg" alt="profile_pic" className="order-2 w-[12em] justify-self-center border-blue-300 border-5 rounded-full m-[1em]" width={250} height={250}/>
              <div className="order-1 col-span-2">
                  <h1 className="text-2xl font-bold">Hi, My name is Warodom, The Greatest Web Developer!</h1>
                  <br></br>
                  <h3 className="text-l">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae voluptatum iste cumque corporis modi labore soluta consectetur laudantium consequuntur voluptatem? Tenetur in temporibus velit sequi facilis accusamus.</h3>
                  <br></br>
                  <button className="bg-orange-500 text-white p-[0.5em]">Download CV</button>
              </div>
        </section>
        <section className="grid bg-blue-100">
            <nav className="flex flex-row justify-between w-[80vw] text-center m-[1em] justify-self-center">
                <h3>Recent posts</h3>
                <a href="#">View all</a>
            </nav>
            <div className="grid grid-cols-2 gap-[1em] w-[80vw] justify-self-center">
              <div className="mb-[1em] bg-white p-[1em]">
                  <h2 className="text-[20px] font-bold">Making a design system from scratch</h2>
                  <br></br>
                  <h3>17 Feb 2025  <span className="ml-[1em] mr-[1em]">|</span>  Design, Pattern</h3>
                  <br></br>
                  <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia vitae id facere dolore non cupiditate asperiores ipsam impedit quos. Consectetur est illo mollitia fuga!</h3>
              </div>
              <div className="mb-[1em] bg-white p-[1em]">
                      <h2 className="text-[20px] font-bold">Making a design system from scratch</h2>
                      <br></br>
                      <h3>19 Feb 2025  <span className="ml-[1em] mr-[1em]">|</span>  Next.js, Fullstack</h3>
                      <br></br>
                      <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque fuga a aliquam nesciunt aperiam odio illum, optio quam dolore molestias veniam libero molestiae sint aliquid!</h3>
              </div>
            </div>
        </section>
        <section className="justify-self-center w-[80vw] text-start">
          <div className="text-start mt-[1em] mb-[1em] text-2xl">Feature works</div>
          <div className="mt-[1em] mb-[1em]">
            <div className="flex align-middle mb-[1em]">
              <div>
                  <Image src="/dashboard1.jpg" alt="" className="w-[30em] rounded-[10px] ml-0" width={200} height={200}/>
              </div>
                <div className="ml-[1em] mt-[auto] mb-[auto]">
                    <h2 className="text-[20px] font-bold">Designing Dashboards</h2>
                    <br></br>
                    <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse ratione modi nesciunt qui, voluptas necessitatibus eius, laudantium a tempore quis reprehenderit debitis perferendis. Labore, vitae rem?</h3>
                    <button className="bg-orange-500 text-white p-[0.5em] m-[1em] ml-0">View case study</button>
                </div>
            </div>
            <hr className="border-2 border-gray-500 mb-[1em]"></hr>
            <div className="flex align-middle mb-[1em]">
              <div>
                  <Image src="/dashboard1.jpg" alt="" className="w-[30em] rounded-[10px] ml-0" width={200} height={200}/>
              </div>
                <div className="ml-[1em] mt-[auto] mb-[auto]">
                    <h2 className="text-[20px] font-bold">Designing Dashboards</h2>
                    <br></br>
                    <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse ratione modi nesciunt qui, voluptas necessitatibus eius, laudantium a tempore quis reprehenderit debitis perferendis. Labore, vitae rem?</h3>
                    <button className="bg-orange-500 text-white p-[0.5em] m-[1em] ml-0">View case study</button>
                </div>
            </div>
            <hr className="border-2 border-gray-500 mb-[1em]"></hr>
            <div className="flex align-middle mb-[1em]">
              <div>
                  <Image src="/dashboard1.jpg" alt="" className="w-[30em] rounded-[10px] ml-0" width={200} height={200}/>
              </div>
                <div className="ml-[1em] mt-[auto] mb-[auto]">
                    <h2 className="text-[20px] font-bold">Designing Dashboards</h2>
                    <br></br>
                    <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse ratione modi nesciunt qui, voluptas necessitatibus eius, laudantium a tempore quis reprehenderit debitis perferendis. Labore, vitae rem?</h3>
                    <button className="bg-orange-500 text-white p-[0.5em] m-[1em] ml-0">View case study</button>
                </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
