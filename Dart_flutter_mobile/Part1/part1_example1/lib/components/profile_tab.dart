import 'package:flutter/material.dart';

class ProfileTab extends StatefulWidget {
  const ProfileTab({super.key});

  @override
  State<ProfileTab> createState() => _ProfileTabState();
}

class _ProfileTabState extends State<ProfileTab>
    with SingleTickerProviderStateMixin {
  late TabController _tabController;

  late List<String> listImages = [];

  @override
  void initState() {
    super.initState();
    _tabController = TabController(length: 2, vsync: this);

    for (var i = 1; i < 44; i++) {
      listImages.add("https://picsum.photos/id/${i}/200/200");
    }
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        _buildTabBar(),
        _buildTabView(),
      ],
    );
  }

  _buildTabBar() {
    return TabBar(
      controller: _tabController,
      tabs: [
        Tab(
            icon: Icon(
              Icons.account_balance,
            )),
        Tab(
            icon: Icon(
              Icons.picture_in_picture,
            )),
      ],
    );
  }

  _buildTabView() {
    return Expanded(
      child: TabBarView(
        controller: _tabController,
        children: [
          _buildTab_1(),
          _buildTab_2(),
        ],
      ),
    );
  }

  _buildTab_1() {
    return GridView.builder(
      gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
        crossAxisCount: 3,
        crossAxisSpacing: 10,
        mainAxisSpacing: 10,
      ),
      itemCount: listImages.length,
      itemBuilder: (ctx, index) {
        return InkWell(
          onTap: () {
            print("image click: ${listImages[index]}");
          },
          child: ClipRRect(
            child: Image.network(
              listImages[index],
              fit: BoxFit.cover,
            ),
            borderRadius: BorderRadius.circular(5),
          ),
        );
      },
    );
  }

  _buildTab_2() {
    return GridView.builder(
      gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
        crossAxisCount: 3,
        crossAxisSpacing: 10,
        mainAxisSpacing: 10,
      ),
      itemCount: 8,
      itemBuilder: (ctx, index) {
      return InkWell(
        onTap: () {},
        child: Image.network(
          listImages[index],
          fit: BoxFit.cover,
        ),
      );
    },);
  }
}
