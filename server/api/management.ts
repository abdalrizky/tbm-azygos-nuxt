export default defineEventHandler((event) => {
  return [
    {
      id: 1,
      name: "John Doe",
      position: "Ketua Umum",
      faculty: "Kedokteran",
      batch: "2021",
      image: "https://ui-avatars.com/api/?name=John+Doe&background=random"
    },
    {
      id: 2,
      name: "Jane Smith",
      position: "Wakil Ketua",
      faculty: "Kedokteran",
      batch: "2021",
      image: "https://ui-avatars.com/api/?name=Jane+Smith&background=random"
    },
    {
      id: 3,
      name: "Budi Santoso",
      position: "Sekretaris",
      faculty: "Kedokteran",
      batch: "2022",
      image: "https://ui-avatars.com/api/?name=Budi+Santoso&background=random"
    }
  ];
});
