import Btn from "./Btn";

function Users({ img, name, revenue, content, button }) {
  return (
    <div className="border-2 border-gray-400 rounded-md p-5 mb-10 max-w-lg">
      <div className="user flex gap-4 mb-4">
        <img src={img} alt="img of the user" />
        <div>
          <p className="font-semibold text-main">{name}</p>
          <p>{revenue}</p>
        </div>
      </div>
      <p>{content}</p>
      <div className="my-5 lg:w-full text-center">
      <Btn name={button} color={false} outline={true} />
      </div>
      
    </div>
  );
}

export default Users;
