// kalau pake class component itu bisa statefull component
// class Button extends React.Component {
//   render() {
//     return (
//       <button
//         className="h-10 px-6 font-semibold rounded-md bg-black text-white"
//         type="submit"
//       >
//         Buy now class
//       </button>
//     );
//   }
// }
// jika pakai function component itu bisa stateless component
// function ButtonRed() {
//   return (
//     <button
//       className="h-10 px-6 font-semibold rounded-md bg-red-500 text-white"
//       type="submit"
//     >
//       Buy now function
//     </button>
//   );
// }
// arrow function

const Button = (props) => {
  const { classes, children } = props;
  return (
    <button
      className={`h-10 px-6 font-semibold rounded-md ${classes} text-white`}
      type="submit"
    >
      {children}
    </button>
  );
};

export default Button;
