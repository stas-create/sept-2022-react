export default function Character (props) {
    let {item:value}=props
       return (
        <div className={'card'}>
            <h4>ID={value.id}. Name={value.name}</h4>
            <div>
                status={value.status} <br/> Gender={value.gender} <br/> Species={value.species}
            </div>
            <img className={'imageC'} src={value.image} alt=""/>
        </div>
    );
}