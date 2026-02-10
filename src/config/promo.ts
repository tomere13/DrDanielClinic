export type PromoType = "valentine" | "newYear" | "generic";

export interface PromoConfig {
  isActive: boolean;
  type: PromoType;
  delay: number; // in milliseconds
}

export const promoConfig: PromoConfig = {
  isActive: true, // Set to true to enable the popup
  type: "valentine", // Change this to switch between campaigns
  delay: 10000, // 10 seconds
};
