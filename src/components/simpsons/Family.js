import './main.css';
import Simpson from "./Simpson";
export default function Family () {
    return (
        <div className={'simpsonFamily'}>


            <Simpson name={'Bart'} link={'https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png'}/>
            <Simpson name={'Homer'} link={'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'}/>
            <Simpson name={'Marge'} link={'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'}/>
            <Simpson name={'Lisa'} link={'https://upload.wikimedia.org/wikipedia/uk/a/ae/Lisasmiling.png'}/>
            <Simpson name={'Lisa'} link={'https://upload.wikimedia.org/wikipedia/en/9/9d/Maggie_Simpson.png'}/>
        </div>
    );
}