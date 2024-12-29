import React, { useState } from 'react'
import '../App.css'


export default function PizzaOptions() {

    return (
        <div>
            <div className='pizzaName'>
                <h2>Position Absolute Acı Pizza</h2>
            </div>
            <div className='rating'>
                <p>85.50₺</p>
                <p>4.9</p>
                <p>(200)</p>
            </div>
            <div className='details'>
                <p>Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. . Küçük bir pizzaya bazen pizzetta denir.</p>
            </div>
            <div className='Size'>
                <h4>Boyut Seç <span className='zorunlu'>*</span></h4>
                <h4>Hamur seç <span className='zorunlu'>*</span></h4>
            </div>
            <div>

                <div>
                    <label>
                        <input
                            type="radio"
                            value="small"
                        />
                        Small
                    </label>
                </div>
                <div>
                    <label>
                        <input
                            type="radio"
                            value="medium"
                        />
                        Medium
                    </label>
                </div>
                <div>
                    <label>
                        <input
                            type="radio"
                            value="large"
                        />
                        Large
                    </label>
                </div>

            </div>










        </div>

    )
}
