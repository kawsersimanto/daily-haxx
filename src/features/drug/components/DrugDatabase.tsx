"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useDrugStore } from "@/features/drug";
import { BarChart3, FileText, Filter, Search, X } from "lucide-react";

const drugData = [
  {
    company: "Pfizer",
    brand: "Paxlovid",
    molecule: "Mrna",
    modality: "Biologic",
    mechanism: "mRNA vaccine",
    diseaseArea: "Infectious Disease",
    approvedIndications: "COVID-19",
    ltmSales: "$18.9B",
    relatedContent: ["doc", "chart"],
  },
  {
    company: "Moderna",
    brand: "Spikevax",
    molecule: "Mrna",
    modality: "Small Molecule",
    mechanism: "PD-L1 inhibitor",
    diseaseArea: "Infectious Disease",
    approvedIndications: "Multiple cancers",
    ltmSales: "$18.9B",
    relatedContent: ["doc", "chart", "data"],
  },
  {
    company: "Roche",
    brand: "Spikevax",
    molecule: "Mrna",
    modality: "Biologic",
    mechanism: "mRNA vaccine",
    diseaseArea: "Oncology",
    approvedIndications: "COVID-19",
    ltmSales: "$15.2B",
    relatedContent: ["doc", "chart"],
  },
  {
    company: "Gilead",
    brand: "Tensentrix",
    molecule: "Mrna",
    modality: "Small Molecule",
    mechanism: "Protease inhibitor",
    diseaseArea: "Infectious Disease",
    approvedIndications: "Multiple cancers",
    ltmSales: "$15.2B",
    relatedContent: ["doc", "chart", "data"],
  },
  {
    company: "Moderna",
    brand: "Spikevax",
    molecule: "BIC/FTC",
    modality: "Small Molecule",
    mechanism: "mRNA vaccine",
    diseaseArea: "Oncology",
    approvedIndications: "HIV-1",
    ltmSales: "$15.2B",
    relatedContent: ["doc", "chart"],
  },
  {
    company: "Pfizer",
    brand: "Tensentrix",
    molecule: "BIC/FTC",
    modality: "Biologic",
    mechanism: "PD-L1 inhibitor",
    diseaseArea: "Infectious Disease",
    approvedIndications: "COVID-19",
    ltmSales: "$18.9B",
    relatedContent: ["doc", "chart", "data"],
  },
  {
    company: "Roche",
    brand: "Tensentrix",
    molecule: "BIC/FTC",
    modality: "Biologic",
    mechanism: "PD-L1 inhibitor",
    diseaseArea: "Oncology",
    approvedIndications: "HIV-1",
    ltmSales: "$18.9B",
    relatedContent: ["doc", "chart"],
  },
];

export function DrugDatabase() {
  const {
    searchQuery,
    filters,
    setSearchQuery,
    setFilter,
    removeFilter,
    clearAllFilters,
  } = useDrugStore();

  const activeFilters = Object.entries(filters)
    .filter(([key, value]) => value !== "")
    .map(([key, value]) => {
      const labels = {
        diseaseArea: "Disease Area",
        modality: "Modality",
        mechanism: "Mechanism",
        sortBy: "Sort by",
        salesRange: "LTM Range",
      };
      return {
        key,
        label: `${labels[key as keyof typeof labels]}: ${value}`,
        value,
      };
    });

  const hasActiveFilters = activeFilters.length > 0;

  const renderRelatedContentIcons = (content: string[]) => {
    return (
      <div className="flex items-center gap-1">
        {content.map((type, index) => (
          <div key={index} className="w-5 h-5 text-green-600">
            {type === "doc" && <FileText className="w-4 h-4" />}
            {type === "chart" && <BarChart3 className="w-4 h-4" />}
            {type === "data" && (
              <div className="w-4 h-4 bg-green-600 rounded-sm flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-sm"></div>
              </div>
            )}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-semibold text-gray-900">
              Drug Database
            </h1>
            <div className="flex items-center gap-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search here"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 w-64"
                />
              </div>
              <Button className="bg-green-600 hover:bg-green-700 text-white">
                Search
              </Button>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white border-b border-gray-200 p-6">
          <div className="flex items-center gap-2 mb-4">
            <Filter className="w-4 h-4 text-gray-600" />
            <span className="font-medium text-gray-900">Filter & Short</span>
          </div>

          <div className="grid grid-cols-5 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Disease Area
              </label>
              <Select
                value={filters.diseaseArea}
                onValueChange={(value) => setFilter("diseaseArea", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select disease area" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Infectious disease">
                    Infectious disease
                  </SelectItem>
                  <SelectItem value="Oncology">Oncology</SelectItem>
                  <SelectItem value="Cardiology">Cardiology</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Modality
              </label>
              <Select
                value={filters.modality}
                onValueChange={(value) => setFilter("modality", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select modality" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Biologic">Biologic</SelectItem>
                  <SelectItem value="Small Molecule">Small Molecule</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Mechanism
              </label>
              <Select
                value={filters.mechanism}
                onValueChange={(value) => setFilter("mechanism", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select mechanism" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Agonist">Agonist</SelectItem>
                  <SelectItem value="Antagonist">Antagonist</SelectItem>
                  <SelectItem value="Inhibitor">Inhibitor</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Sort by
              </label>
              <Select
                value={filters.sortBy}
                onValueChange={(value) => setFilter("sortBy", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Brand name: A-Z">
                    Brand name: A-Z
                  </SelectItem>
                  <SelectItem value="Brand name: Z-A">
                    Brand name: Z-A
                  </SelectItem>
                  <SelectItem value="Company">Company</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                LTM Sales range
              </label>
              <Select
                value={filters.salesRange}
                onValueChange={(value) => setFilter("salesRange", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="$0.0B - $20.0B">$0.0B - $20.0B</SelectItem>
                  <SelectItem value="$20.0B - $50.0B">
                    $20.0B - $50.0B
                  </SelectItem>
                  <SelectItem value="$50.0B+">$50.0B+</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Active Filters */}
          {hasActiveFilters && (
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-sm font-medium text-gray-700">
                Active filters:
              </span>
              {activeFilters.map((filter, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  onClick={() => removeFilter(filter.key)}
                  className="cursor-pointer bg-blue-50 text-blue-700 hover:bg-blue-100"
                >
                  {filter.label}
                  <X className="w-3 h-3 ml-1" />
                </Badge>
              ))}
              <Button
                variant="ghost"
                size="sm"
                onClick={clearAllFilters}
                className="text-gray-600 hover:text-gray-900"
              >
                <X className="w-4 h-4 mr-1" />
                Clear filter
              </Button>
            </div>
          )}
        </div>

        {/* Data Table */}
        <div className="flex-1 p-6 overflow-auto">
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
                    <TableCell className="font-medium">
                      {drug.company}
                    </TableCell>
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
                    <TableCell className="font-medium">
                      {drug.ltmSales}
                    </TableCell>
                    <TableCell>
                      {renderRelatedContentIcons(drug.relatedContent)}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </div>
      </div>
    </div>
  );
}
