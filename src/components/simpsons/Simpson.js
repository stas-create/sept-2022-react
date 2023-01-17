export default function Simpson (props) {
    let {name,link}=props
    return (
        <div className={'item'}>
            <h2>{name}</h2>
            <img className={'imageS'} src={link}/>
        </div>
    );
}