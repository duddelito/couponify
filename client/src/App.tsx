import React, {useEffect, useState} from "react";

import './App.css';

import List from "./components/List/List";
import Form from "./components/Form/Form";
import I18n from "./services/I18n";
import Button from "./components/Button/Button";


const App = () => {
    const baseUrl = process.env.REACT_APP_BASE_URL;

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: ''
    };

    const [list, setList] = useState([]);
    const [coupon, setCoupon] = useState('');


    const loggedinBrand = {"brandId": "0", "brandName": "Adidas", "campaignId" : "0"};
    const loggedinUser = {"userId": "0", "userName": "Alex"};

    // On app load get data from backend
    useEffect(() => {
        const requestUrl = baseUrl + 'coupon/get/brand/' + loggedinBrand.brandId;

        fetch(requestUrl)
            .then((response) => response.json())
            .then((data) => {
                setList(data);
            });
    }, []);

    const generateCoupons = (amount) => {
        const requestUrl = baseUrl + 'coupon/generate';
        requestOptions.body = JSON.stringify({"brandId": loggedinBrand.brandId, "amount": amount, "campaignId": loggedinBrand.campaignId});

        console.log(requestOptions);

        fetch(requestUrl, requestOptions)
            .then((response) => response.json())
            .then((data) => {
                setList(data);
            });
    }

    const handleClick = (event: any) => {
        event.preventDefault();

        const requestUrl = baseUrl + 'coupon/get/user/' + loggedinUser.userId + '/?campaign=' + loggedinBrand.campaignId;

        fetch(requestUrl)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setCoupon(data.code);
            });
    }

    return (
        <div className="app">
            <h1>Couponify</h1>

            <div className="column brand-portal">
                <h2>{loggedinBrand.brandName} - Brand coupon codes:</h2>
                <p><b style={{backgroundColor: 'darkseagreen'}}>Unused</b> <b style={{backgroundColor: 'brown'}}>Redeemed</b></p>
                <List list={list}/>
                <Form value={I18n.get.labels.search} baseUrl={baseUrl} generateCoupons={generateCoupons} />
            </div>

            <div className="column user-portal">
                <h2>{loggedinUser.userName} - User coupon codes:</h2>
                <h3>{coupon}</h3>
                <Button value={I18n.get.labels.fetch} onClick={handleClick} />
            </div>
        </div>
    );
}

export default App
