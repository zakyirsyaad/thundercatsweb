-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 01, 2023 at 03:21 PM
-- Server version: 10.4.25-MariaDB
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `thundercat`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `nama` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`email`, `password`, `nama`) VALUES
('javier@gmail.com', 'gentokates', 'Javier'),
('javier@gmail.com', 'gentokates', 'Javier');

-- --------------------------------------------------------

--
-- Table structure for table `checkout`
--

CREATE TABLE `checkout` (
  `nama` varchar(255) NOT NULL,
  `negara` varchar(255) NOT NULL,
  `kota` varchar(255) NOT NULL,
  `kecamatan` varchar(255) NOT NULL,
  `alamat` varchar(255) NOT NULL,
  `kode_pos` int(255) NOT NULL,
  `no_telp` int(255) NOT NULL,
  `email` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `nama_product` varchar(255) DEFAULT NULL,
  `jenis_product` varchar(255) DEFAULT NULL,
  `harga` int(15) DEFAULT NULL,
  `stok` int(15) DEFAULT NULL,
  `foto` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id`, `nama_product`, `jenis_product`, `harga`, `stok`, `foto`, `url`, `createdAt`, `updatedAt`) VALUES
(7, 'Helvyn Black Thundercats', 'kaos', 0, 999, '7e20386ecd99da6f0329402a224ce914.jpeg', 'https://thanksinsomnia.asia/wp-content/uploads/2023/06/ginee_20230622142836508_4241830757.jpeg', '2023-06-30 08:52:37', '2023-06-30 08:52:37'),
(8, 'Ivanovna Black Thundercats', 'hoodie', 400, 999, '7e20386ecd99da6f0329402a224ce914.jpeg', 'https://thanksinsomnia.asia/wp-content/uploads/2023/06/ginee_20230628124023406_0727830410.jpeg', '2023-06-30 09:28:21', '2023-06-30 09:28:21'),
(9, 'Long Shirt Jane 06', 'Kemeja', 350, 999, '4b632c8bda422366fd7a1d07e6465990.jpeg', 'https://thanksinsomnia.asia/wp-content/uploads/2023/06/ginee_20230605121332627_9845003663-570x739.jpeg', '2023-07-01 13:08:40', '2023-07-01 13:08:40'),
(10, 'Shirts T-girl', 'Kemeja', 350, 999, 'ddff46244b23c1cd24bbfb6e41529d03.jpeg', 'https://thanksinsomnia.asia/wp-content/uploads/2023/07/ginee_20230701120610757_2725577287-570x739.jpeg', '2023-07-01 13:09:19', '2023-07-01 13:09:19'),
(11, 'Parka Jacket Stevia Dark Navy', 'Outware', 499, 999, 'e6f83393cda8eac3f593247f0d4831aa.jpeg', 'https://thanksinsomnia.asia/wp-content/uploads/2023/05/ginee_20230522120201325_1752896557-570x739.jpeg', '2023-07-01 13:13:57', '2023-07-01 13:13:57'),
(12, 'Hoodie Mayra Purple Leopard', 'hoodie', 349, 999, 'a0ea6fbf9dbeb125f25499add4d755eb.jpeg', 'https://thanksinsomnia.asia/wp-content/uploads/2023/05/ginee_20230522105035532_8978443621.jpeg', '2023-07-01 13:15:11', '2023-07-01 13:15:11');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id_user` int(255) NOT NULL,
  `nama` varchar(255) NOT NULL,
  `negara` varchar(255) NOT NULL,
  `kota` varchar(255) NOT NULL,
  `kecamatan` varchar(255) NOT NULL,
  `alamat` varchar(255) NOT NULL,
  `kodepos` int(255) NOT NULL,
  `no_telp` int(255) NOT NULL,
  `email` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id_user`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id_user` int(255) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
