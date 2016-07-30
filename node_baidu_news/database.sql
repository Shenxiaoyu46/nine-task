-- phpMyAdmin SQL Dump
-- version 4.4.10
-- http://www.phpmyadmin.net
--
-- Host: localhost:8889
-- Generation Time: 2016-02-28 13:06:08
-- 服务器版本： 5.5.42
-- PHP Version: 5.6.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `baidunews`
--

-- --------------------------------------------------------

--
-- 表的结构 `newslist`
--

CREATE TABLE `newslist` (
  `newsId` int(11) NOT NULL COMMENT 'id',
  `newsTitle` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'title',
  `newsContent` varchar(10000) COLLATE utf8mb4_unicode_ci NOT NULL,
  `newsImg` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `newsSrc` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `newsTag` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `newsTime` date NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 转存表中的数据 `newslist`
--

INSERT INTO `newslist` (`newsId`, `newsTitle`, `newsContent`, `newsImg`, `newsSrc`, `newsTag`, `newsTime`) VALUES
(24, '变态王子与不笑猫动漫图片', '变态王子与不笑猫动漫图片', 'http://img.tuku.com/upload/picture/2015/01/6K51yz4.jpg', '图库', '推荐', '2016-02-28'),
(25, '恐怖动漫《怪化猫》图片', '恐怖动漫《怪化猫》图片', 'http://img.tuku.com/upload/picture/2015/01/7OdX8cV.jpg', '恐怖', '百家', '2016-02-28'),
(26, '星空的邂逅动漫图片', '星空的邂逅动漫图片', 'http://img.tuku.com/upload/picture/2015/01/4j4R7ZT.jpg', '星空', '本地', '2016-02-28'),
(27, '星空的邂逅动漫图片', '星空的邂逅动漫图片', 'http://img.tuku.com/upload/picture/2015/01/5HHQe8t.jpg', '星空', '图片', '2016-02-28'),
(28, '插图矢量图 图片素材 其他', '插图矢量图 图片素材 其他', 'http://pica.nipic.com/2007-11-09/200711912453162_2.jpg', '百度', '娱乐', '2016-02-28'),
(29, '动物插图0271', '动物插图0271', 'http://image.photophoto.cn/m-6/Animal/Amimal%20illustration/0180300271.jpg', '可乐', '社会', '2016-02-28'),
(30, '丛林之美0336-森林中的大河图片', '丛林之美0336-森林中的大河图片', 'http://pica.nipic.com/2007-12-16/20071216105113620_2.jpg', '泥土', '军事', '2016-02-28'),
(31, '梦丹189元儿童照', '梦丹189元儿童照', 'http://a2.att.hudong.com/14/64/19300001356374131497644042505.jpg', '招聘', '女人', '2016-02-28');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `newslist`
--
ALTER TABLE `newslist`
  ADD PRIMARY KEY (`newsId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `newslist`
--
ALTER TABLE `newslist`
  MODIFY `newsId` int(11) NOT NULL AUTO_INCREMENT COMMENT 'id',AUTO_INCREMENT=1;