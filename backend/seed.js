import mongoose from "mongoose";
import dotenv from "dotenv";
import { Property } from "./src/Models/PropertyModel.js";

dotenv.config();

const seedProperties = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB connected");

    // Clear existing properties
    await Property.deleteMany({});
    console.log("🗑️  Cleared existing properties");

    // Aesthetic property/location images - high quality with proper params
    const farmImage = "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=500&h=400&fit=crop&q=80";
    const mountainImage = "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=400&fit=crop&q=80";
    const beachImage = "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&h=400&fit=crop&q=80";
    const resortImage = "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=500&h=400&fit=crop&q=80";
    const luxuryImage = "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=500&h=400&fit=crop&q=80";
    const lakeImage = "https://images.unsplash.com/photo-1551874353-deb1b4c28efb?w=500&h=400&fit=crop&q=80";
    
    const sampleProperties = [
      {
        propertyName: "Delightful Farm Cottage - Mysore",
        description: "Beautiful farm cottage with modern amenities in the heart of Mysore",
        propertyType: "House",
        roomType: "Entire Home",
        extraInfo: "WiFi, Kitchen, Garden, Parking",
        address: {
          street: "Farm Road",
          city: "Mysuru",
          state: "Karnataka",
          pincode: "570001",
        },
        amenities: [
          { name: "Wifi", icon: "wifi" },
          { name: "Kitchen", icon: "kitchen" },
          { name: "Free Parking", icon: "parking" },
          { name: "Ac", icon: "ac" },
          { name: "Tv", icon: "tv" },
          { name: "Washing Machine", icon: "wash" },
        ],
        checkInTime: "2:00 PM",
        checkOutTime: "10:00 AM",
        maximumGuest: 4,
        price: 1999,
        images: Array(6).fill({ url: farmImage, public_id: "sample_1" }),
        userId: new mongoose.Types.ObjectId(),
        slug: "delightful-farm-cottage-mysore",
      },
      {
        propertyName: "Mountain View Villa - Manali",
        description: "Stunning mountain view villa with all modern facilities",
        propertyType: "House",
        roomType: "Entire Home",
        extraInfo: "WiFi, Kitchen, Parking, Heater",
        address: {
          street: "Hill Station Road",
          city: "Manali",
          state: "Himachal Pradesh",
          pincode: "175131",
        },
        amenities: [
          { name: "Wifi", icon: "wifi" },
          { name: "Kitchen", icon: "kitchen" },
          { name: "Free Parking", icon: "parking" },
          { name: "Ac", icon: "ac" },
          { name: "Tv", icon: "tv" },
          { name: "Washing Machine", icon: "wash" },
        ],
        checkInTime: "2:00 PM",
        checkOutTime: "10:00 AM",
        maximumGuest: 6,
        price: 2999,
        images: Array(6).fill({ url: mountainImage, public_id: "sample_2" }),
        userId: new mongoose.Types.ObjectId(),
        slug: "mountain-view-villa-manali",
      },
      {
        propertyName: "Cozy Flat - Chennai",
        description: "Cozy flat with sea view near beach",
        propertyType: "Flat",
        roomType: "Entire Home",
        extraInfo: "WiFi, Kitchen, Beach Access",
        address: {
          street: "Beach Street",
          city: "Chennai",
          state: "Tamil Nadu",
          pincode: "600001",
        },
        amenities: [
          { name: "Wifi", icon: "wifi" },
          { name: "Kitchen", icon: "kitchen" },
          { name: "Free Parking", icon: "parking" },
          { name: "Ac", icon: "ac" },
          { name: "Tv", icon: "tv" },
          { name: "Pool", icon: "pool" },
        ],
        checkInTime: "2:00 PM",
        checkOutTime: "10:00 AM",
        maximumGuest: 5,
        price: 2999,
        images: Array(6).fill({ url: beachImage, public_id: "sample_3" }),
        userId: new mongoose.Types.ObjectId(),
        slug: "cozy-flat-chennai",
      },
      {
        propertyName: "Guest House - Cochin",
        description: "Beautiful guest house in Kerala with traditional charm",
        propertyType: "Guest House",
        roomType: "Entire Home",
        extraInfo: "WiFi, Kitchen, Garden",
        address: {
          street: "Backwater Road",
          city: "Cochin",
          state: "Kerala",
          pincode: "682001",
        },
        amenities: [
          { name: "Wifi", icon: "wifi" },
          { name: "Kitchen", icon: "kitchen" },
          { name: "Free Parking", icon: "parking" },
          { name: "Ac", icon: "ac" },
          { name: "Tv", icon: "tv" },
          { name: "Washing Machine", icon: "wash" },
        ],
        checkInTime: "2:00 PM",
        checkOutTime: "10:00 AM",
        maximumGuest: 8,
        price: 3999,
        images: Array(6).fill({ url: resortImage, public_id: "sample_4" }),
        userId: new mongoose.Types.ObjectId(),
        slug: "guest-house-cochin",
      },
      {
        propertyName: "Luxury Apartment - Mumbai",
        description: "Luxury apartment in the heart of Mumbai with city skyline view",
        propertyType: "Flat",
        roomType: "Entire Home",
        extraInfo: "WiFi, Kitchen, Gym, Parking",
        address: {
          street: "Marine Drive",
          city: "Mumbai",
          state: "Maharashtra",
          pincode: "400020",
        },
        amenities: [
          { name: "Wifi", icon: "wifi" },
          { name: "Kitchen", icon: "kitchen" },
          { name: "Free Parking", icon: "parking" },
          { name: "Ac", icon: "ac" },
          { name: "Tv", icon: "tv" },
          { name: "Pool", icon: "pool" },
        ],
        checkInTime: "2:00 PM",
        checkOutTime: "10:00 AM",
        maximumGuest: 4,
        price: 4999,
        images: Array(6).fill({ url: luxuryImage, public_id: "sample_5" }),
        userId: new mongoose.Types.ObjectId(),
        slug: "luxury-apartment-mumbai",
      },
      {
        propertyName: "Lakeside Resort - Udaipur",
        description: "Beautiful lakeside resort with traditional Rajasthani architecture",
        propertyType: "Hotel",
        roomType: "Entire Home",
        extraInfo: "WiFi, Restaurant, Pool, Parking",
        address: {
          street: "Lake Pichola Road",
          city: "Udaipur",
          state: "Rajasthan",
          pincode: "313001",
        },
        amenities: [
          { name: "Wifi", icon: "wifi" },
          { name: "Kitchen", icon: "kitchen" },
          { name: "Free Parking", icon: "parking" },
          { name: "Pool", icon: "pool" },
          { name: "Tv", icon: "tv" },
          { name: "Ac", icon: "ac" },
        ],
        checkInTime: "2:00 PM",
        checkOutTime: "10:00 AM",
        maximumGuest: 10,
        price: 5999,
        images: Array(6).fill({ url: lakeImage, public_id: "sample_6" }),
        userId: new mongoose.Types.ObjectId(),
        slug: "lakeside-resort-udaipur",
      },
    ];

    await Property.insertMany(sampleProperties);
    console.log("✅ Sample properties added successfully!");
    console.log(`📊 Total properties: ${sampleProperties.length}`);

    mongoose.connection.close();
    process.exit(0);
  } catch (error) {
    console.error("❌ Error seeding database:", error);
    process.exit(1);
  }
};

seedProperties();
