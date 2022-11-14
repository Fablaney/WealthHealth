function Select({options, defaultValue})
{
    return (
        <select
        id="State"
        value={defaultValue}
        // onChange={(date) => {
        //     set(date);
        // }}
        // {...register("State", { required: "Please enter your state." })}
    >
        {/* 1er onglet non selectionnable */}
        <option
            // disabled
            // selected
            value="" >
                - Select a State -
        </option>
        {/* liste des états */}
        {
            options.map((state) => (
                <option value={state.name} key={state.name}>
                    {state.abbreviation} - {state.name}
                </option>
            ))
        }
    </select>
    )
}
export default Select