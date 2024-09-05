import React, { useEffect, useState } from 'react';
import Search from './Search/Search';
import axios from 'axios';
import Table from './Table/Table';
import Cards from '../Cards/Cards';

const Dashboard = () => {
    const [therapists, setTherapists] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        axios.get('/jsons/therapist.json')
            .then(response => {
                const query = searchQuery.toLowerCase();
                const allTherapists = response.data;

                if (searchQuery) {
                    const searchedTherapists = allTherapists.filter(therapist =>
                        therapist.name.toLowerCase().includes(query) ||
                        therapist.address.toLowerCase().includes(query) ||
                        therapist.workplace.toLowerCase().includes(query)
                    )
                    setTherapists(searchedTherapists);
                } else {
                    setTherapists(allTherapists);
                }

            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, [searchQuery]);
    return (
        <div className=''>
            <Search setSearchQuery={setSearchQuery} />
            <Cards/>
            <Table/>
        </div>
    );
};

export default Dashboard;
