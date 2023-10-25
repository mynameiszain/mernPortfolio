import React from 'react'

function Cards() {
  return (
    <div>
    <div>
        <div className="card m-5" style={{ "width": "300px" }}>
            <img className="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKieLxViT8EFo3bcV-t0-SUP8amKLIyW9YuKrAcBUw&s" alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">make up the bulk of the card's content.</p>
                <div className='container'>
                    <select className="h-100 w-25 m-2 bg-success" name="" id="">
                        {
                            Array.from(Array(6), (e, i) => {
                                return (
                                    <option key={i + 1} value={i + 1}>{i + 1}</option>
                                )
                            })
                        }
                    </select>
                    <select className='w-50 h-100 m-2 bg-success' name="" id="">
                        <option value="half">Half</option>
                        <option value="full">Full</option>
                    </select>
                </div>
                <h6>Total Price</h6>
            </div>
        </div>
    </div>
</div>
  )
}

export default Cards