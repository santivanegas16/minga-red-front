export default function Category({ name, color, hover, value, action, isChecked }) {
    console.log(isChecked);
    return (
        isChecked ? (<label className='w-[75px] h-[35px] rounded-[50px] font-poppins font-medium text-[12px] leading-[11.42px] text-center'
            style={{ backgroundColor: `${color}`, color: `${hover}` }}> {name}
            <input onChange={action} value={name} id={value} type="checkbox" defaultChecked={isChecked} />
        </label>) : (
            <label className='w-[75px] h-[35px] rounded-[50px] font-poppins font-medium text-[12px] leading-[11.42px] text-center'
                style={{ backgroundColor: `${hover}`, color: `${color}` }}> {name}
                <input onChange={action} value={name} id={value} type="checkbox" defaultChecked={isChecked} />
            </label>)
    )
}