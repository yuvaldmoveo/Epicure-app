import type { Chef } from "../../types"

export const mockChefs: Chef[] = [
  {
    id: "chef-ran-shmueli",
    name: "Ran Shmueli",
    about: "Chef Ran Shmueli is known for his farm-to-table approach and Mediterranean cuisine.",
    isChefOfTheWeek: false,
    pictureUrl: "/mockPictur/ran-shmueli.jpg",
    restaurants: ["1"] 
  },
  {
    id: "chef-yariv-malili",
    name: "Yariv Malili",
    about: "Chef Yariv Malili crafts bold, flavor-forward dishes with an Asian twist.",
    isChefOfTheWeek: false,
    pictureUrl: "/mockPictur/yariv-malili.jpg",
    restaurants: ["2"]
  },
  {
    id: "chef-aviv-moshe",
    name: "Aviv Moshe",
    about: "Chef Aviv Moshe is a culinary virtuoso renowned for infusing traditional Israeli and Mediterranean dishes with innovative techniques. His passion for food was ignited early, immersed in his family's kitchen and the vibrant local markets of his Egyptian heritage.",
    isChefOfTheWeek: true,
    pictureUrl: "/src/assets/pictures/chef/chef-aviv-moshe.jpg",
    restaurants: ["3"]
  },
]