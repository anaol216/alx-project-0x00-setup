import Card from "@/components/Card"
import Button from "@/components/Button"

const Landing: React.FC =  () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <Card />
      <div className="flex flex-col gap-4 p-8">
      {/* Small buttons */}
      <Button title="Small Rounded" styles="text-sm rounded-sm bg-blue-500 text-white" />
      <Button title="Small Medium" styles="text-sm rounded-md bg-green-500 text-white" />
      <Button title="Small Full" styles="text-sm rounded-full bg-red-500 text-white" />
        <Button title="Small Full" styles="text-sm rounded-lg bg-purple-500 text-white" />

      {/* Medium buttons */}
      <Button title="Medium Rounded" styles="text-base rounded-sm bg-blue-500 text-white" />
      <Button title="Medium Rounded-md" styles="text-base rounded-md bg-green-500 text-white" />
      <Button title="Medium Full" styles="text-base rounded-full bg-red-500 text-white" />
        <Button title="Medium Full" styles="text-base rounded-lg bg-purple-500 text-white" />

      {/* Large buttons */}
      <Button title="Large Rounded" styles="text-lg rounded-sm bg-blue-500 text-white" />
      <Button title="Large Rounded-md" styles="text-lg rounded-md bg-green-500 text-white" />
      <Button title="Large Full" styles="text-lg rounded-full bg-red-500 text-white" />
      <Button title="Extra Large Full" styles="text-xl rounded-lg bg-purple-500 text-white" />
    </div>
    </div>
  )
}
export default Landing