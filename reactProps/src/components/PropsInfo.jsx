

function PropsInfo({name, num, bool}) {

    console.log(bool);

    let foo = "test";

    function addTwoNums(a,b) {
        return console.log(a + b)
    }

    let date = new Date();
    let hours = date.getHours();
    let timeOfDay;

    if (hours < 12) {
        timeOfDay = "morning"
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = "afternoon"
    } else {
        timeOfDay = "night"
    }

    return (
        <div className="row">
            <div className="col-12 text-center">
                <h1>Props Info Header! {foo}</h1>
            </div>
            <div className="col-12">
                <p>{name} {num}</p>
                {/* <a href=""></a> */}
                {/* <img src="" alt="" /> */}
                {/* <input type="text" name="" id="" /> */}
            </div>
            <div className="col-12">
                <h2>Good {timeOfDay}</h2>
            </div>

        </div>
    )
}

export default PropsInfo