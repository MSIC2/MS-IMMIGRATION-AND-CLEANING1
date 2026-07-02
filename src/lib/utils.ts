export const currentYear = () => new Date().getFullYear();

export const formatDate = (date: Date) => {
  return new Date(date).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};