import React , { useEffect ,useState } from 'react'
import { useDispatch ,useSelector } from 'react-redux'
import * as actions from '../store/action/index'
import ImgMediaCard from './card';
 
export default function MainComponent () {

    const dispatch = useDispatch();
    const { data } = useSelector(state => state.mainReducer);

    const [type, setType] = useState('ALL');
    const [newsData, setNewsData] = useState([]);
    const [searchText, setSearchText] = useState(null);

    useEffect(() => {
        const getNewsData = () => dispatch(actions.getData())  
        getNewsData();
    },[dispatch])
    
    useEffect(() => {
        if(data && data.length > 0){
            setNewsData(data)
        }
    }, [data])

    useEffect(() => {
        if(type === 'SOURCE' && searchText && searchText.length > 0){
            let result =  data.filter(news => {
                return news.source.name.toLowerCase().includes(searchText)
            })
            setNewsData(result)
        }
        else{
            setNewsData(data)
        }
    }, [type,searchText,data])

    const handleTypeChange = (e) => {
        setType(e.target.value)
    }

    const handleSearchChange = (e) => {
        setSearchText(e.target.value)
    }

    return(
        <>
            <div>
                <span className="header">News</span>
                <div className="radio-div">
                    <div className="radio-btn">
                        <input value="ALL" checked={type === 'ALL'} type="radio" name="type" onClick={(e) => handleTypeChange(e)} />
                        <label>All</label>
                    </div>
                    <div className="radio-btn">
                        <input value="SOURCE" checked={type === 'SOURCE'} type="radio" name="type" onClick={(e) => handleTypeChange(e)} />
                        <label>Agency / Source</label>
                    </div>
                    <div className="radio-btn">
                        <input value={searchText}  type="text" name="type" onChange={(e) => handleSearchChange(e)} placeholder="Search"/>
                    </div>
                </div>
                <br/>
                <hr/>
            </div>
            {
                newsData.map((item) => (
                    <ImgMediaCard data={item} key={item.publishedAt}/>
                ))
            }
        </>
    )
}