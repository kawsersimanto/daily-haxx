import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { drugData, RelatedContentIcons } from "@/features/drug";
import Link from "next/link";

export const DrugTable = () => {
  return (
    <div className="overflow-x-auto">
      <Card className="py-0 max-w-[1028px]">
        <Table className="sm:w-[1350px] w-[700px]">
          <TableHeader>
            <TableRow>
              <TableHead className="sm:py-4 py-2 sm:px-5 px-4">
                Company
              </TableHead>
              <TableHead>Brand</TableHead>
              <TableHead>Molecule</TableHead>
              <TableHead>Modality</TableHead>
              <TableHead>Mechanism</TableHead>
              <TableHead>Disease Area</TableHead>
              <TableHead>Approved Indications</TableHead>
              <TableHead>LTM Sales</TableHead>
              <TableHead>Related Content</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {drugData.map((drug, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium sm:py-6 py-2 sm:px-5 px-4">
                  {drug.company}
                </TableCell>
                <TableCell>{drug.brand}</TableCell>
                <TableCell>{drug.molecule}</TableCell>
                <TableCell>
                  <Link href="/" className="underline">
                    {drug.modality}
                  </Link>
                </TableCell>
                <TableCell>{drug.mechanism}</TableCell>
                <TableCell>{drug.diseaseArea}</TableCell>
                <TableCell>{drug.approvedIndications}</TableCell>
                <TableCell className="font-medium">{drug.ltmSales}</TableCell>
                <TableCell>
                  <RelatedContentIcons content={drug.relatedContent} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
};
