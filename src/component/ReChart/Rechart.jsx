import { useParams } from "react-router";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

// export default function Rechart() 
  const resultData=[
  {
    "image": "https://i.ibb.co.com/ymFBF6pS/whatsapp.png",
    "title": "WhatsApp ",
    "companyName": "WhatsApp LLC",
    "id": 1,
    "description": "Simple. Reliable. Private messaging and calling for free.",
    "size": 92,
    "reviews": 189000000,
    "ratingAvg": 4.3,
    "downloads": 10000000000,
    "ratings": [
      { "name": "1 star", "count": 18000000 },
      { "name": "2 star", "count": 8000000 },
      { "name": "3 star", "count": 15000000 },
      { "name": "4 star", "count": 35000000 },
      { "name": "5 star", "count": 112000000 }
    ]
  },
  {
    "image": "https://i.ibb.co.com/20DvL59y/instagram.jpg",
    "title": "Instagram",
    "companyName": "Instagram",
    "id": 2,
    "description": "Create & share photos, stories, reels and videos with friends.",
    "size": 78,
    "reviews": 154000000,
    "ratingAvg": 4.4,
    "downloads": 5000000000,
    "ratings": [
      { "name": "1 star", "count": 12000000 },
      { "name": "2 star", "count": 6000000 },
      { "name": "3 star", "count": 11000000 },
      { "name": "4 star", "count": 28000000 },
      { "name": "5 star", "count": 97000000 }
    ]
  },
  {
    "image": "https://i.ibb.co.com/7tgbz1bf/facebook.png",
    "title": "Facebook",
    "companyName": "Meta Platforms, Inc.",
    "id": 3,
    "description": "Find friends, watch videos, and connect with people.",
    "size": 65,
    "reviews": 138000000,
    "ratingAvg": 4.1,
    "downloads": 10000000000,
    "ratings": [
      { "name": "1 star", "count": 22000000 },
      { "name": "2 star", "count": 9000000 },
      { "name": "3 star", "count": 14000000 },
      { "name": "4 star", "count": 25000000 },
      { "name": "5 star", "count": 68000000 }
    ]
  },
  {
    "image": "https://i.ibb.co.com/zhBFTv9Q/tiktok.png",
    "title": "TikTok",
    "companyName": "TikTok Pte. Ltd.",
    "id": 4,
    "description": "Real short videos made just for you.",
    "size": 118,
    "reviews": 63000000,
    "ratingAvg": 4.5,
    "downloads": 2000000000,
    "ratings": [
      { "name": "1 star", "count": 5000000 },
      { "name": "2 star", "count": 2500000 },
      { "name": "3 star", "count": 6000000 },
      { "name": "4 star", "count": 12000000 },
      { "name": "5 star", "count": 37000000 }
    ]
  },
  {
    "image": "https://i.ibb.co.com/zHfQ17Zw/youtube.png",
    "title": "YouTube",
    "companyName": "Google LLC",
    "id": 5,
    "description": "Watch, listen, stream videos and music.",
    "size": 135,
    "reviews": 159000000,
    "ratingAvg": 4.3,
    "downloads": 10000000000,
    "ratings": [
      { "name": "1 star", "count": 14000000 },
      { "name": "2 star", "count": 7000000 },
      { "name": "3 star", "count": 12000000 },
      { "name": "4 star", "count": 30000000 },
      { "name": "5 star", "count": 96000000 }
    ]
  },
  {
    "image": "https://i.ibb.co.com/GQxNZJdG/telegram.png",
    "title": "Telegram",
    "companyName": "Telegram FZ-LLC",
    "id": 6,
    "description": "Fast and secure messaging app.",
    "size": 72,
    "reviews": 14000000,
    "ratingAvg": 4.4,
    "downloads": 1000000000,
    "ratings": [
      { "name": "1 star", "count": 800000 },
      { "name": "2 star", "count": 400000 },
      { "name": "3 star", "count": 900000 },
      { "name": "4 star", "count": 2500000 },
      { "name": "5 star", "count": 9500000 }
    ]
  },
  {
    "image": "https://i.ibb.co.com/GQqYD7rZ/Spotify.png",
    "title": "Spotify",
    "companyName": "Spotify AB",
    "id": 7,
    "description": "Listen to millions of songs and podcasts.",
    "size": 85,
    "reviews": 31000000,
    "ratingAvg": 4.5,
    "downloads": 1000000000,
    "ratings": [
      { "name": "1 star", "count": 2500000 },
      { "name": "2 star", "count": 1200000 },
      { "name": "3 star", "count": 3000000 },
      { "name": "4 star", "count": 7000000 },
      { "name": "5 star", "count": 17000000 }
    ]
  },
  {
    "image": "https://i.ibb.co.com/WN3dNghW/Shopee.png",
    "title": "Shopee",
    "companyName": "Shopee",
    "id": 8,
    "description": "Shop online with the best deals & free shipping.",
    "size": 110,
    "reviews": 18000000,
    "ratingAvg": 4.6,
    "downloads": 500000000,
    "ratings": [
      { "name": "1 star", "count": 1200000 },
      { "name": "2 star", "count": 600000 },
      { "name": "3 star", "count": 1400000 },
      { "name": "4 star", "count": 4000000 },
      { "name": "5 star", "count": 11000000 }
    ]
  },
  {
    "image": "https://i.ibb.co.com/mCLjmnxK/daraz.png",
    "title": "Daraz Online Shopping",
    "companyName": "Daraz",
    "id": 9,
    "description": "Biggest online shopping store in Bangladesh.",
    "size": 95,
    "reviews": 8500000,
    "ratingAvg": 4.4,
    "downloads": 100000000,
    "ratings": [
      { "name": "1 star", "count": 700000 },
      { "name": "2 star", "count": 400000 },
      { "name": "3 star", "count": 800000 },
      { "name": "4 star", "count": 2000000 },
      { "name": "5 star", "count": 5500000 }
    ]
  },
  {
    "image": "https://i.ibb.co.com/nqFQDDQb/pubg.jpg",
    "title": "PUBG MOBILE",
    "companyName": "Level Infinite",
    "id": 10,
    "description": "Epic battle royale masterpiece.",
    "size": 1200,
    "reviews": 46000000,
    "ratingAvg": 4.2,
    "downloads": 500000000,
    "ratings": [
      { "name": "1 star", "count": 6000000 },
      { "name": "2 star", "count": 3000000 },
      { "name": "3 star", "count": 5000000 },
      { "name": "4 star", "count": 10000000 },
      { "name": "5 star", "count": 22000000 }
    ]
  },
  {
    "image": "https://i.ibb.co.com/vC2Fddt0/free-fire.jpg",
    "title": "Free Fire",
    "companyName": "Garena International",
    "id": 11,
    "description": "10-minute survival shooter!",
    "size": 750,
    "reviews": 116000000,
    "ratingAvg": 4.2,
    "downloads": 1000000000,
    "ratings": [
      { "name": "1 star", "count": 15000000 },
      { "name": "2 star", "count": 7000000 },
      { "name": "3 star", "count": 12000000 },
      { "name": "4 star", "count": 25000000 },
      { "name": "5 star", "count": 57000000 }
    ]
  },
  {
    "image": "https://i.ibb.co.com/nsZJv9tn/bkash.jpg",
    "title": "bKash",
    "companyName": "bKash Limited",
    "id": 12,
    "description": "Most popular mobile financial service in Bangladesh.",
    "size": 68,
    "reviews": 4200000,
    "ratingAvg": 4.5,
    "downloads": 50000000,
    "ratings": [
      { "name": "1 star", "count": 300000 },
      { "name": "2 star", "count": 150000 },
      { "name": "3 star", "count": 400000 },
      { "name": "4 star", "count": 1000000 },
      { "name": "5 star", "count": 2850000 }
    ]
  },
  {
    "image": "https://i.ibb.co.com/nNjvxFDv/nogod.png",
    "title": "Nagad",
    "companyName": "Nagad Ltd",
    "id": 13,
    "description": "Digital financial service by Bangladesh Post Office.",
    "size": 70,
    "reviews": 3200000,
    "ratingAvg": 4.4,
    "downloads": 50000000,
    "ratings": [
      { "name": "1 star", "count": 350000 },
      { "name": "2 star", "count": 180000 },
      { "name": "3 star", "count": 450000 },
      { "name": "4 star", "count": 850000 },
      { "name": "5 star", "count": 2000000 }
    ]
  },
  {
    "image": "https://i.ibb.co.com/pvN6QkH5/snapchat.jpg",
    "title": "Snapchat",
    "companyName": "Snap Inc",
    "id": 14,
    "description": "Share the moment!",
    "size": 88,
    "reviews": 34000000,
    "ratingAvg": 4.3,
    "downloads": 1000000000,
    "ratings": [
      { "name": "1 star", "count": 4000000 },
      { "name": "2 star", "count": 2000000 },
      { "name": "3 star", "count": 4000000 },
      { "name": "4 star", "count": 8000000 },
      { "name": "5 star", "count": 16000000 }
    ]
  },
  {
    "image": "https://i.ibb.co.com/4wTf7bxs/canva.jpg",
    "title": "Canva",
    "companyName": "Canva",
    "id": 15,
    "description": "Design anything. Publish anywhere.",
    "size": 45,
    "reviews": 14000000,
    "ratingAvg": 4.7,
    "downloads": 100000000,
    "ratings": [
      { "name": "1 star", "count": 400000 },
      { "name": "2 star", "count": 200000 },
      { "name": "3 star", "count": 600000 },
      { "name": "4 star", "count": 2500000 },
      { "name": "5 star", "count": 10500000 }
    ]
  },
  {
    "image": "https://i.ibb.co.com/r26Xsz1G/capcut.png",
    "title": "CapCut",
    "companyName": "Bytedance Pte. Ltd.",
    "id": 16,
    "description": "Video editor with music for TikTok.",
    "size": 165,
    "reviews": 12000000,
    "ratingAvg": 4.6,
    "downloads": 500000000,
    "ratings": [
      { "name": "1 star", "count": 800000 },
      { "name": "2 star", "count": 400000 },
      { "name": "3 star", "count": 900000 },
      { "name": "4 star", "count": 2200000 },
      { "name": "5 star", "count": 7800000 }
    ]
  },
  {
    "image": "https://i.ibb.co.com/fYm7XHB1/google-Meet.png",
    "title": "Google Meet",
    "companyName": "Google LLC",
    "id": 17,
    "description": "High quality video calling for everyone.",
    "size": 68,
    "reviews": 9800000,
    "ratingAvg": 4.3,
    "downloads": 5000000000,
    "ratings": [
      { "name": "1 star", "count": 1200000 },
      { "name": "2 star", "count": 600000 },
      { "name": "3 star", "count": 1100000 },
      { "name": "4 star", "count": 2200000 },
      { "name": "5 star", "count": 5700000 }
    ]
  },
  {
    "image": "https://i.ibb.co.com/VWVfVXBb/zoom.jpg",
    "title": "Zoom",
    "companyName": "zoom.us",
    "id": 18,
    "description": "Video conferencing and meetings.",
    "size": 210,
    "reviews": 4200000,
    "ratingAvg": 4.0,
    "downloads": 1000000000,
    "ratings": [
      { "name": "1 star", "count": 800000 },
      { "name": "2 star", "count": 400000 },
      { "name": "3 star", "count": 700000 },
      { "name": "4 star", "count": 1000000 },
      { "name": "5 star", "count": 1900000 }
    ]
  },
  {
    "image": "https://i.ibb.co.com/qLFRFtP0/Netflix.png",
    "title": "Netflix",
    "companyName": "Netflix, Inc.",
    "id": 19,
    "description": "Watch movies and TV shows online.",
    "size": 102,
    "reviews": 14500000,
    "ratingAvg": 4.3,
    "downloads": 1000000000,
    "ratings": [
      { "name": "1 star", "count": 1800000 },
      { "name": "2 star", "count": 900000 },
      { "name": "3 star", "count": 1500000 },
      { "name": "4 star", "count": 3000000 },
      { "name": "5 star", "count": 7300000 }
    ]
  },
  {
    "image": "https://i.ibb.co.com/bgJpBq23/gmail.png",
    "title": "Gmail",
    "companyName": "Google LLC",
    "id": 20,
    "description": "Fast, searchable email with less spam.",
    "size": 135,
    "reviews": 13800000,
    "ratingAvg": 4.4,
    "downloads": 10000000000,
    "ratings": [
      { "name": "1 star", "count": 900000 },
      { "name": "2 star", "count": 500000 },
      { "name": "3 star", "count": 1000000 },
      { "name": "4 star", "count": 2800000 },
      { "name": "5 star", "count": 8500000 }
    ]
  }
]
  export default function Rechart() {
  const { id } = useParams();

  const appData = resultData.find(app => app.id === Number(id));
  const data = appData?.ratings || [];

  return (
    <BarChart className="mx-auto" width={600} height={300} data={data}>
      <XAxis 
        dataKey="name" 
        stroke="red"
        padding={{ left: 10, right: 30 }} 
      />
      <YAxis stroke="red" />
      <Tooltip />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <Bar dataKey="count" fill="green" barSize={30} />
    </BarChart>
  );
  }
