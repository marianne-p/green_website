import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useNavigate } from "react-router-dom";

const ComparisonPreview = () => {
  const navigate = useNavigate();

  return (
    <section className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <h2 className="section-title">Compare Our Solutions</h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="overflow-x-auto"
        >
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-800 text-white">
                <TableHead className="bg-gray-800 text-white"> </TableHead>
                <TableHead className="bg-gray-800 text-white">Solar service solution</TableHead>
                <TableHead className="bg-gray-800 text-white">Asset finance (lease / hire purchase)</TableHead>
                <TableHead className="bg-gray-800 text-white">PPA (power purchase agreement)</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="bg-gray-800 text-white">Who is the provider</TableCell>
                <TableCell className="bg-[rgba(149, 232, 178, 0.8)]">Green Earth Solutions</TableCell>
                <TableCell>Other providers (brokers or asset finance specialists)</TableCell>
                <TableCell>Other providers (brokers or large PPA specialists)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="bg-gray-800 text-white">How it works</TableCell>
                <TableCell className="bg-[rgba(149, 232, 178, 0.8)]">Use energy for free and sell excess to the grid in exchange for a monthly service fee, with peace of mind through our positive value guarantee

We manage and pay for all aspects of the installation, including monitoring, maintenance, repairs and insurance
                </TableCell>
                <TableCell>Borrow money from a lender directly or via a broker to fund the installation

Manage and pay for all day-to-day monitoring, maintenance and repairs yourself
                </TableCell>
                <TableCell>Buy energy at a slightly cheaper rate than from the grid, in exchange for the PPA provider building the installation and managing it day-to-day</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="bg-gray-800 text-white">Who is it good for</TableCell>
                <TableCell className="bg-[rgba(149, 232, 178, 0.8)]">Customers who want the benefits of solar, but prefer to focus their expertise and capital on their core business activities</TableCell>
                <TableCell>Customers who want to own the assets within several years and manage the installation themselves</TableCell>
                <TableCell>Customers who want slightly cheaper energy rates and certainty of future costs, in exchange for less overall benefit</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <div className="text-center mt-8">
            <Button
              variant="outline"
              onClick={() => navigate("/green_website/comparison")}
              className="hover:bg-primary hover:text-white"
            >
              See Full Comparison
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ComparisonPreview;