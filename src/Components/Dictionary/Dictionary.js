import './Dictionary.css'

function Dictionary() {
  return (
    <div className='dictionary'>
      <div className='container'>
        <div className='dictionary_inner'>
          {/* <div className='dictionary_inner_word-addition'>
            <div className='dictionary_inner_word-addition_form'></div>
          </div> */}
          <div className='dictionary_inner_tables'>
            <div className='dictionary_inner_tables_myList dictionary__tableItem'>
              <div className='dictionary__title'>My list</div>
              <ul className='dictionary__list'>
                <li className='dictionary__list_item'>Word</li>
                <li className='dictionary__list_item'>Word</li>
                <li className='dictionary__list_item'>Word</li>
                <li className='dictionary__list_item'>Word</li>
                <li className='dictionary__list_item'>Word</li>
                <li className='dictionary__list_item'>Word</li>
                <li className='dictionary__list_item'>Word</li>
                <li className='dictionary__list_item'>Word</li>
                <li className='dictionary__list_item'>Word</li>
                <li className='dictionary__list_item'>Word</li>
              </ul>
            </div>
            <div className='dictionary_inner_tables_character dictionary__tableItem'>
            <div className='dictionary__title'>Character</div>
              <ul className='dictionary__list'>
                <li className='dictionary__list_item'>Word</li>
                <li className='dictionary__list_item'>Word</li>
                <li className='dictionary__list_item'>Word</li>
                <li className='dictionary__list_item'>Word</li>
                <li className='dictionary__list_item'>Word</li>
                <li className='dictionary__list_item'>Word</li>
                <li className='dictionary__list_item'>Word</li>
                <li className='dictionary__list_item'>Word</li>
                <li className='dictionary__list_item'>Word</li>
                <li className='dictionary__list_item'>Word</li>
              </ul>
            </div>
            <div className='dictionary_inner_tables_phrasalVerb dictionary__tableItem'>
            <div className='dictionary__title'>Phrasal verb</div>
              <ul className='dictionary__list'>
                <li className='dictionary__list_item'>Word</li>
                <li className='dictionary__list_item'>Word</li>
                <li className='dictionary__list_item'>Word</li>
                <li className='dictionary__list_item'>Word</li>
                <li className='dictionary__list_item'>Word</li>
                <li className='dictionary__list_item'>Word</li>
                <li className='dictionary__list_item'>Word</li>
                <li className='dictionary__list_item'>Word</li>
                <li className='dictionary__list_item'>Word</li>
                <li className='dictionary__list_item'>Word</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dictionary