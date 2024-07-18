
export default function TaskInput({task}){
    return(
        <>
       
        <li>{task}</li>
        <select className="select w-full max-w-xs">
  <option disabled selected> What region are you located? </option>
  <option>ShortNorth</option>
  <option>BronzeVille</option>
  <option>ClintonVille</option>
  <option>Easton</option>
  <option>Dublin</option>
</select>




        </>
    )
}


