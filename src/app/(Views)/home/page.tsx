// import Navbar from "@/components/Navbar";
// import { ListIcon, Plus } from "lucide-react";

// interface HomeProps {}

// const Home = ({}: HomeProps): JSX.Element => {
//   return (
//     <MainContainer>
//       <Navbar />
//       <div className="relative flex-col sm:flex bg-pink-300 gap-2 p-2 h-[calc(100%-70px)] sm:h-[80%] w-full rounded-sm overflow-hidden">
//         <div className="h-full w-full relative">{/* <Upcoming /> */}</div>
//         <div className="h-full w-full relative">
//           <SongView />
//         </div>
//       </div>
//     </MainContainer>
//   );
// };

// export default Home;

// const MainContainer = ({ children }: { children: React.ReactNode }) => {
//   return (
//     <div className="h-screen flex flex-col max-h-screen overflow-hidden bg-[#000000]">
//       {children}
//     </div>
//   );
// };

// const Flex = ({ children }: { children: React.ReactNode }) => {
//   return (
//     <div className="relative flex gap-2 p-2 h-[calc(100%-70px)] sm:h-[80%] w-full rounded-sm overflow-hidden">
//       {children}
//     </div>
//   );
// };

// const Upcoming = () => {
//   return (
//     <div className="h-full w-full rounded-sm relative bg-[#121212] overflow-hidden pt-2">
//       <div className="h-16 absolute top-0 w-full flex items-center justify-between px-4 text-gray-400 font-extrabold bg-gray-800/30 backdrop-blur-xl">
//         <div className="flex justify-between items-center gap-2 transition-all duration-300 hover:text-gray-200">
//           <ListIcon />
//           <div>Upcoming Moods</div>
//         </div>
//         <Plus className="cursor-pointer transition-all duration-300 hover:text-gray-200" />
//       </div>
//       <div className="overflow-y-scroll overflow-hidden h-full w-full pt-16 px-2 space-y-1">
//         <div className="bg-[#171919] px-2 py-4 rounded-sm">this is</div>
//         <div className="bg-[#171919] px-2 py-4 rounded-sm">this is</div>
//         <div className="bg-[#171919] px-2 py-4 rounded-sm">this is</div>
//         <div className="bg-[#171919] px-2 py-4 rounded-sm">this is</div>
//         <div className="bg-[#171919] px-2 py-4 rounded-sm">this is</div>
//         <div className="bg-[#171919] px-2 py-4 rounded-sm">this is</div>
//         <div className="bg-[#171919] px-2 py-4 rounded-sm">this is</div>
//         <div className="bg-[#171919] px-2 py-4 rounded-sm">this is</div>
//         <div className="bg-[#171919] px-2 py-4 rounded-sm">this is</div>
//         <div className="bg-[#171919] px-2 py-4 rounded-sm">this is</div>
//         <div className="bg-[#171919] px-2 py-4 rounded-sm">this is</div>
//         <div className="bg-[#171919] px-2 py-4 rounded-sm">this is</div>
//         <div className="bg-[#171919] px-2 py-4 rounded-sm">this is</div>
//         <div className="bg-[#171919] px-2 py-4 rounded-sm">this is</div>
//       </div>
//     </div>
//   );
// };
// const SongView = () => {
//   return (
//     <div className="h-full w-full rounded-sm px-2 bg-gradient-to-b from-[#e63588] to-[#9b5274]">
//       <div className="h-16 flex items-center justify-between px-4 text-white text-4xl font-extrabold">
//         MUSIC
//       </div>
//       <div className="h-16 flex items-center justify-between px-4 text-white text-4xl font-extrabold">
//         MUSIC
//       </div>
//       <div className="h-16 flex items-center justify-between px-4 text-white text-4xl font-extrabold">
//         MUSIC
//       </div>
//       <div className="h-16 flex items-center justify-between px-4 text-white text-4xl font-extrabold">
//         MUSIC
//       </div>
//     </div>
//   );
// };
"use client";
import Navbar from "@/components/Navbar";
import { ListIcon, Plus } from "lucide-react";
import { useSession } from "next-auth/react";

interface HomeProps {}

const Home = ({}: HomeProps): JSX.Element => {
  const session = useSession();
  return (
    <MainContainer>
      <div className="text-red-900 text-4xl">
        {JSON.stringify(session.data?.user)}
      </div>
      <Navbar />
      <Flex>
        <Upcoming />
        <SongView />
      </Flex>
    </MainContainer>
  );
};

export default Home;

const MainContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen flex flex-col max-h-screen overflow-hidden bg-[#000000]">
      {children}
    </div>
  );
};

const Flex = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative flex flex-col sm:flex-row gap-2 p-2 h-[calc(100%-70px)] sm:h-[80%] w-full rounded-sm overflow-hidden">
      {children}
    </div>
  );
};

const Upcoming = () => {
  return (
    <div className="h-1/2 sm:h-full w-full sm:w-1/2 relative rounded-sm bg-[#121212] overflow-hidden pt-2">
      <div className="h-16 absolute top-0 w-full flex items-center justify-between px-4 text-gray-400 font-extrabold bg-gray-800/30 backdrop-blur-xl rounded-sm">
        <div className="flex justify-between items-center gap-2 transition-all duration-300 hover:text-gray-200">
          <ListIcon />
          <div>Upcoming Moods</div>
        </div>
        <Plus className="cursor-pointer transition-all duration-300 hover:text-gray-200" />
      </div>
      <div className="overflow-y-scroll overflow-hidden h-full w-full pt-16 px-2 space-y-1">
        {/* Content */}
      </div>
    </div>
  );
};

// const SongView = () => {
//   return (
//     <div className="flex-col h-1/2 sm:h-full w-full sm:w-1/2 relative rounded-sm overflow-hidden overflow-y-scroll">
//       <div className="bg-gradient-to-b from-[#e63588] via-[#63384c51] to-[#76676e00] py-12 pt-20 pb-64 h-fit flex items-center justify-between px-4 text-white text-8xl font-extrabold">
//         MUSIC
//       </div>
//       <div className="-mt-48 min-h-full h-fit backdrop-blur-sm bg-gradient-to-b from-[#3533344d] via-[#76676e16] to-[#76676e00]">
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
//         voluptatum eligendi fugiat incidunt dolorem architecto est, a vel
//         debitis, harum exercitationem quos praesentium reprehenderit? Neque
//         laboriosam porro numquam corporis repellat amet facere illo, beatae
//         cupiditate, vero, magni voluptatibus possimus tenetur suscipit
//         repellendus non autem in eveniet! Aut ab qui libero iusto error deleniti
//         distinctio dolorem in fuga! Ab recusandae a perspiciatis dolores id,
//         temporibus at voluptatum debitis eos quae velit dolorem placeat
//         blanditiis laborum enim sed vero eum modi dolor laudantium cupiditate!
//         Sint dolorem tempora repudiandae ut, explicabo dolorum ipsam delectus
//         qui veniam reprehenderit. Ab, molestias numquam voluptate molestiae
//         fuga, tempore suscipit magnam facere, inventore officia id. Perspiciatis
//         reiciendis enim, fuga porro, quisquam tenetur corrupti a quis maiores
//         explicabo deserunt. Laudantium voluptate magni, voluptatum molestiae
//         necessitatibus voluptatibus explicabo accusamus, numquam, ex repellendus
//         nam architecto omnis rem cupiditate pariatur voluptas maxime. Tempora ex
//         dolores, dolor minima ipsum quis rem eius dolorum in amet blanditiis
//         eveniet soluta, accusantium doloremque nisi et tempore a laborum totam
//         odio reiciendis explicabo labore nam. Dolorem doloribus illo veritatis
//         nobis laborum temporibus mollitia error tempore odit. Odio totam
//         repellendus impedit necessitatibus officiis minima consequuntur
//         obcaecati magnam nemo adipisci doloremque, accusantium, quam iusto velit
//         culpa ut natus laborum at. Exercitationem doloremque ea tempore atque
//         laudantium, magnam, voluptates hic quos ipsa ex quod animi repudiandae
//         officia aspernatur expedita, perspiciatis blanditiis totam vero aliquid
//         velit quo adipisci molestiae quia doloribus. Maxime saepe quisquam
//         necessitatibus ut repellendus nesciunt voluptates accusamus explicabo in
//         quidem neque veniam atque facere quo ipsum rerum nostrum magni
//         consequatur ab labore recusandae reiciendis, provident doloribus
//         voluptas? Nulla harum aspernatur laboriosam hic tempora asperiores
//         labore consequuntur culpa porro exercitationem? Enim excepturi est
//         distinctio natus cumque adipisci molestiae pariatur, esse quo quas
//         impedit laboriosam aperiam ea illum obcaecati dolores nesciunt veritatis
//         voluptatum autem deleniti sapiente! Minus voluptatum obcaecati harum
//         exercitationem deserunt ex voluptas, corrupti atque voluptatibus
//         repudiandae minima vel, eum dolorem. Modi nihil similique dolorum est!
//         Autem in, sequi itaque mollitia quas sed, est, dicta iure illum atque
//         adipisci. Voluptas optio non itaque vitae doloremque minus excepturi
//         reiciendis! Perspiciatis quaerat voluptates in, quisquam velit vero
//         ullam consectetur placeat itaque suscipit doloremque cupiditate ex
//         magnam animi odit sed! Iusto enim a perferendis rerum quae nihil
//         explicabo corrupti tempore, doloremque quas dolorum minus? Cum omnis,
//         cupiditate vero eligendi, reprehenderit quas voluptatum, sed officia
//         provident quod repudiandae qui. Natus praesentium libero pariatur velit
//         voluptates totam molestias nisi cupiditate hic quas! Quos, aspernatur?
//       </div>
//     </div>
//   );
// };

const SongView = () => {
  return (
    <div className="flex-col h-1/2 sm:h-full w-full sm:w-1/2 relative rounded-sm overflow-hidden overflow-y-scroll">
      {/* Adjusting the gradient and text styling */}
      <div className="bg-gradient-to-b from-[#e63588] via-[#833ab4] to-[#fd1d1d] py-12 pt-20 pb-64 h-fit flex items-center justify-between px-4 text-white text-8xl font-extrabold">
        MUSIC
      </div>
      {/* Adjusting the gradient for the content section */}
      <div className="-mt-48 min-h-full h-fit backdrop-blur-sm bg-gradient-to-b from-[#1e1e1e] via-[#2c2c2c] to-[#1e1e1e]">
        {/* Sample content to fill the area */}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
        voluptatum eligendi fugiat incidunt dolorem architecto est, a vel
        debitis, harum exercitationem quos praesentium reprehenderit? Neque
        laboriosam porro numquam corporis repellat amet facere illo, beatae
        cupiditate, vero, magni voluptatibus possimus tenetur suscipit
        repellendus non autem in eveniet! Aut ab qui libero iusto error deleniti
        distinctio dolorem in fuga! Ab recusandae a perspiciatis dolores id,
        temporibus at voluptatum debitis eos quae velit dolorem placeat
        blanditiis laborum enim sed vero eum modi dolor laudantium cupiditate!
        {/* More content... */}
      </div>
    </div>
  );
};
