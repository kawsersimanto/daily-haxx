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

export const DrugTable = () => {
  return (
    <>
      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Company</TableHead>
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
                <TableCell className="font-medium">{drug.company}</TableCell>
                <TableCell>{drug.brand}</TableCell>
                <TableCell>{drug.molecule}</TableCell>
                <TableCell>
                  <span className="text-blue-600 underline cursor-pointer">
                    {drug.modality}
                  </span>
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
    </>
  );
};
