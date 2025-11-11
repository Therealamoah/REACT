import React from "react";
import Title from "./Title";
import Description from "./Description";
import Image from "./Image";


class simpleCard extends React.Component {
    render() {
        return (
            <div className="max-w-2xl mx-auto mt-10 bg-yellow-100 rounded-lg shadow-lg overflow-hidden flex">

                <div className="w-1/3">
                <Image url="https://scontent.facc6-1.fna.fbcdn.net/v/t39.30808-6/555725661_1479336863390349_4968588470983868852_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeH03W7BasXRei3NH_AczOwaRDPUFGD9g9lEM9QUYP2D2R-gXFeg_fcu7c0wCRJEwVwXAdGIcjjCt2jkSR4QZkhf&_nc_ohc=v8mUpLuEi9gQ7kNvwE3fnF3&_nc_oc=AdkzbVKfHgXitMwBqi94e9IUe47uvmSByleyd-FXkMbunzpXzOozDmqflf11Fa6uGbs&_nc_zt=23&_nc_ht=scontent.facc6-1.fna&_nc_gid=xcVRp2fJD4MIa0zu-3Rzpw&oh=00_AfgNbGDdw_SvRKmBpMSbNc6QyKARpWfNanvSrQXgXpz0KA&oe=6919851B" />
                 </div>
          
       

                {/* Text-right */}
                <div className="w-2/3 p-6 flex flex-col justify-center">
                    <Title text="MR AMOAH CEO OF COLNETT CREATIVE HUB" />
                    <Description text="We Sell affordable data packages and also offer Software and Graphic Design" />
                </div>
            </div>
        );
    }
}

export default simpleCard