import './Thank.css'
import { Link } from 'react-router-dom'

function Thank() {
    return(
        <div>
            <header>
                <Link to="/" ><img className='bt_home' src='/train3.jpg' alt='home'/></Link>
                <h2 className='header'> Payment </h2> 
            </header>
            <section className='section'>
                    <div className='grid'>
                    </div>
                    <div className='box_infomation_payment'>
                        <h3>การชำระเงิน</h3>
                        <img className='pic_payment' src='/payment.jpg'/>                       
                    </div>
                    <div className='grid'>
                        <Link to='/' ><button type="primary" className='bt_next_payment' > เสร็จสิ้น </button></Link>     
                    </div>
            </section>
        </div>
        
    )
}

export default Thank